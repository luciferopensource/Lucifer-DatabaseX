import React, { createContext, useContext, useState, ReactNode } from 'react'
import { parseStorageToBytes } from './aggregateDatabase'

export type StorageUnit = 'AUTO' | 'PB' | 'TB' | 'GB' | 'MB'

interface StorageUnitContextType {
  unit: StorageUnit
  setUnit: (unit: StorageUnit) => void
  formatBytes: (bytes: number) => string
  formatString: (storageStr: string) => string
}

export function formatBytesWithUnit(bytes: number, targetUnit: StorageUnit): string {
  if (bytes <= 0) return '0 B'
  if (targetUnit === 'PB') {
    const tb = bytes / (1024 ** 4)
    const val = tb / 1000
    return `${val >= 10 ? val.toFixed(1) : val.toFixed(2)} PB`
  }
  if (targetUnit === 'TB') {
    const val = bytes / (1024 ** 4)
    return `${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} TB`
  }
  if (targetUnit === 'GB') {
    const val = bytes / (1024 ** 3)
    if (val >= 1000000) {
      return `${Math.round(val).toLocaleString('en-US')} GB`
    }
    return `${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} GB`
  }
  if (targetUnit === 'MB') {
    const val = bytes / (1024 ** 2)
    if (val >= 1000000) {
      return `${Math.round(val).toLocaleString('en-US')} MB`
    }
    return `${val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MB`
  }

  // AUTO Mode: Natural hierarchical representation
  const pb = bytes / (1024 ** 5)
  if (pb >= 1) return `${pb.toFixed(2)} PB`
  const tb = bytes / (1024 ** 4)
  if (tb >= 1) return `${tb.toFixed(2)} TB`
  const gb = bytes / (1024 ** 3)
  if (gb >= 1) return `${gb.toFixed(2)} GB`
  const mb = bytes / (1024 ** 2)
  if (mb >= 1) return `${mb.toFixed(2)} MB`
  const kb = bytes / 1024
  if (kb >= 1) return `${kb.toFixed(2)} KB`
  return `${Math.round(bytes)} B`
}

export function convertStorageString(storageStr: string, targetUnit: StorageUnit): string {
  if (!storageStr) return '0 B'
  if (targetUnit === 'AUTO') return storageStr
  const bytes = parseStorageToBytes(storageStr)
  return formatBytesWithUnit(bytes, targetUnit)
}

const StorageUnitContext = createContext<StorageUnitContextType>({
  unit: 'AUTO',
  setUnit: () => {},
  formatBytes: (b) => formatBytesWithUnit(b, 'AUTO'),
  formatString: (s) => s,
})

export const StorageUnitProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [unit, setUnit] = useState<StorageUnit>('AUTO')

  const formatBytes = (bytes: number) => formatBytesWithUnit(bytes, unit)
  const formatString = (storageStr: string) => convertStorageString(storageStr, unit)

  return (
    <StorageUnitContext.Provider value={{ unit, setUnit, formatBytes, formatString }}>
      {children}
    </StorageUnitContext.Provider>
  )
}

export const useStorageUnit = () => useContext(StorageUnitContext)

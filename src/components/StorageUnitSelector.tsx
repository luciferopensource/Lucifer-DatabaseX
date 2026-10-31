import React from 'react'
import { useStorageUnit, StorageUnit } from '../data/storageUnitContext'

interface StorageUnitSelectorProps {
  compact?: boolean
}

export const StorageUnitSelector: React.FC<StorageUnitSelectorProps> = ({ compact = false }) => {
  const { unit, setUnit } = useStorageUnit()
  const units: StorageUnit[] = ['AUTO', 'PB', 'TB', 'GB', 'MB']

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'rgba(14, 14, 22, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(212, 175, 55, 0.35)',
        borderRadius: '24px',
        padding: compact ? '2px 4px' : '4px 6px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
        gap: '2px',
      }}
    >
      {!compact && (
        <span
          style={{
            fontSize: '0.7rem',
            color: 'rgba(243, 229, 171, 0.65)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            padding: '0 8px 0 6px',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
          }}
        >
          View as:
        </span>
      )}

      {units.map((u) => {
        const isSelected = unit === u
        return (
          <button
            key={u}
            type="button"
            onClick={() => setUnit(u)}
            style={{
              background: isSelected
                ? 'linear-gradient(135deg, #d4af37 0%, #aa771c 100%)'
                : 'transparent',
              color: isSelected ? '#08080c' : 'rgba(243, 229, 171, 0.75)',
              border: isSelected ? '1px solid #d4af37' : '1px solid transparent',
              borderRadius: '16px',
              padding: compact ? '2px 7px' : '3px 10px',
              fontSize: compact ? '0.68rem' : '0.72rem',
              fontWeight: isSelected ? 900 : 700,
              fontFamily: "'JetBrains Mono', monospace",
              cursor: 'pointer',
              boxShadow: isSelected ? '0 0 10px rgba(212, 175, 55, 0.45)' : 'none',
              transition: 'all 0.18s ease',
            }}
          >
            {u}
          </button>
        )
      })}
    </div>
  )
}

export default StorageUnitSelector


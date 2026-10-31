import React from 'react'

interface ArchiveConnectorProps {
  heightPx?: number
}

export const ArchiveConnector: React.FC<ArchiveConnectorProps> = () => {
  return (
    <div
      className="archive-central-spine"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: '320px',
        bottom: '80px',
        left: '50%',
        width: '3px',
        transform: 'translateX(-50%)',
        background: 'linear-gradient(to bottom, #d4af37 0%, rgba(212, 175, 55, 0.4) 50%, rgba(212, 175, 55, 0.1) 100%)',
        boxShadow: '0 0 12px rgba(212, 175, 55, 0.4)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      {/* Downward traveling pulse */}
      <div
        className="archive-pulse-travel"
        style={{
          position: 'absolute',
          top: 0,
          left: '-3px',
          width: '9px',
          height: '24px',
          borderRadius: '4px',
          background: 'linear-gradient(to bottom, #ffffff, #d4af37)',
          boxShadow: '0 0 14px #f3e5ab, 0 0 24px #d4af37',
        }}
      />

      <style>{`
        @keyframes travelDown {
          0% {
            top: 0%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .archive-pulse-travel {
          animation: travelDown 4s ease-in-out infinite;
        }
        @media (max-width: 768px) {
          .archive-central-spine {
            left: 28px !important;
            transform: none !important;
          }
          .archive-node-row {
            justify-content: flex-start !important;
            padding-left: 54px !important;
          }
          .archive-connector-arm {
            left: 28px !important;
            width: 26px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default ArchiveConnector


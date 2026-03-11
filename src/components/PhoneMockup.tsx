import { forwardRef } from 'react';

interface PhoneMockupProps {
  imageSrc: string;
  alt?: string;
  className?: string;
}

export const PhoneMockup = forwardRef<HTMLDivElement, PhoneMockupProps>(
  ({ imageSrc, alt = 'App Screenshot', className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`device-frame relative ${className}`}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '340px',
          maxHeight: '700px',
          aspectRatio: '9/19.5',
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          style={{
            width: '40%',
            height: '28px',
            background: '#0B0D10',
            borderRadius: '0 0 18px 18px',
          }}
        />
        
        {/* Screen */}
        <div className="absolute inset-1 rounded-[28px] overflow-hidden bg-gray-100">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        
        {/* Home Indicator */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
          style={{
            width: '35%',
            height: '5px',
            background: 'rgba(11, 13, 16, 0.2)',
            borderRadius: '3px',
          }}
        />
      </div>
    );
  }
);

PhoneMockup.displayName = 'PhoneMockup';

type ResponsiveWaveProps = {
  fill: string;
};

function buildWavePath(
  segmentCount: number,
  width = 1440,
  baseline = 60,
  amplitude = 60,
  height = 120,
) {
  const segmentWidth = width / segmentCount;
  let path = `M0,${baseline}`;

  for (let index = 0; index < segmentCount; index += 1) {
    const controlX = index * segmentWidth + segmentWidth / 2;
    const controlY = index % 2 === 0 ? baseline - amplitude : baseline + amplitude;
    const endX = (index + 1) * segmentWidth;

    path += ` Q${controlX},${controlY} ${endX},${baseline}`;
  }

  return `${path} L${width},${height} L0,${height} Z`;
}

const wavePaths = {
  mobile: buildWavePath(8),
  tablet: buildWavePath(12),
  desktop: buildWavePath(16),
};

export function ResponsiveWave({ fill }: ResponsiveWaveProps) {
  return (
    <>
      <svg
        className="relative block h-14 w-full sm:hidden"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d={wavePaths.mobile} fill={fill} />
      </svg>
      <svg
        className="relative hidden h-16 w-full sm:block lg:hidden"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d={wavePaths.tablet} fill={fill} />
      </svg>
      <svg
        className="relative hidden h-20 w-full lg:block"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d={wavePaths.desktop} fill={fill} />
      </svg>
    </>
  );
}
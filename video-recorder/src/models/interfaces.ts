interface IHeaderProps {
  title: string;
}

interface IFooterProps {
  toggleDevices: () => void;
  isDevicesSlider: boolean;
}

interface IDevicesProps {
  toggleDevices: () => void;
}

interface IRecordedVideo {
  id: number;
  url: string;
}

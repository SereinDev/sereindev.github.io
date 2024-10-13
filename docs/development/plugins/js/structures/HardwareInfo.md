# HardwareInfo

硬件信息

```ts
declare type HardwareInfo = {
  operatingSystem: OperatingSystem;
  memoryStatus: MemoryStatus;
  batteryList: Battery[];
  biosList: Bios[];
  cpuList: Cpu[];
  driveList: Drive[];
  keyboardList: Keyboard[];
  memoryList: Memory[];
  monitorList: Monitor[];
  motherboardList: Motherboard[];
  mouseList: Mouse[];
  printerList: Printer[];
  soundDeviceList: SoundDevice[];
  videoControllerList: VideoController[];
  networkAdapterList: NetworkAdapter[];
};

declare type NetworkAdapter = {
  adapterType: string;
  caption: string;
  description: string;
  mACAddress: string;
  manufacturer: string;
  name: string;
  netConnectionID: string;
  productName: string;
  speed: number;
  bytesSentPersec: number;
  bytesReceivedPersec: number;
};

declare type Keyboard = {
  caption: string;
  description: string;
  name: string;
  numberOfFunctionKeys: number;
};

declare type Motherboard = {
  manufacturer: string;
  product: string;
  serialNumber: string;
};

declare type OperatingSystem = {
  name: string;
  versionString: string;
  version: string;
};

declare type MemoryStatus = {
  totalPhysical: number;
  availablePhysical: number;
  totalPageFile: number;
  availablePageFile: number;
  totalVirtual: number;
  availableVirtual: number;
  availableExtendedVirtual: number;
};

declare type Battery = {
  fullChargeCapacity: number;
  designCapacity: number;
  batteryStatus: number;
  estimatedChargeRemaining: number;
  estimatedRunTime: number;
  expectedLife: number;
  maxRechargeTime: number;
  timeOnBattery: number;
  timeToFullCharge: number;
  batteryStatusDescription: string;
};

declare type Bios = {
  caption: string;
  description: string;
  manufacturer: string;
  name: string;
  releaseDate: string;
  serialNumber: string;
  softwareElementID: string;
  version: string;
};

declare type Cpu = {
  caption: string;
  currentClockSpeed: number;
  description: string;
  l1InstructionCacheSize: number;
  l1DataCacheSize: number;
  l2CacheSize: number;
  l3CacheSize: number;
  manufacturer: string;
  maxClockSpeed: number;
  name: string;
  numberOfCores: number;
  numberOfLogicalProcessors: number;
  processorId: string;
  secondLevelAddressTranslationExtensions: boolean;
  socketDesignation: string;
  virtualizationFirmwareEnabled: boolean;
  vmMonitorModeExtensions: boolean;
  percentProcessorTime: number;
  cpuCoreList: CpuCore[];
};

declare type CpuCore = {
  name: string;
  percentProcessorTime: number;
};

declare type Drive = {
  partitionList: PartitionList[];
  caption: string;
  description: string;
  firmwareRevision: string;
  index: number;
  manufacturer: string;
  model: string;
  name: string;
  partitions: number;
  serialNumber: string;
  size: number;
};

declare type PartitionList = {
  volumeList: Volume[];
  bootable: boolean;
  bootPartition: boolean;
  caption: string;
  description: string;
  diskIndex: number;
  index: number;
  name: string;
  primaryPartition: boolean;
  size: number;
  startingOffset: number;
};

declare type Volume = {
  caption: string;
  compressed: boolean;
  description: string;
  fileSystem: string;
  freeSpace: number;
  name: string;
  size: number;
  volumeName: string;
  volumeSerialNumber: string;
};

declare type Memory = {
  bankLabel: string;
  capacity: number;
  formFactor: number;
  manufacturer: string;
  maxVoltage: number;
  minVoltage: number;
  partNumber: string;
  serialNumber: string;
  speed: number;
};

declare type Monitor = {
  caption: string;
  description: string;
  monitorManufacturer: string;
  monitorType: string;
  name: string;
  pixelsPerXLogicalInch: number;
  pixelsPerYLogicalInch: number;
  active: boolean;
  manufacturerName: string;
  productCodeID: string;
  serialNumberID: string;
  userFriendlyName: string;
  weekOfManufacture: number;
  yearOfManufacture: number;
};

declare type Mouse = {
  caption: string;
  description: string;
  manufacturer: string;
  name: string;
  numberOfButtons: number;
};

declare type Printer = {
  caption: string;
  default: boolean;
  description: string;
  horizontalResolution: number;
  local: boolean;
  name: string;
  network: boolean;
  shared: boolean;
  verticalResolution: number;
};

declare type SoundDevice = {
  caption: string;
  description: string;
  manufacturer: string;
  name: string;
  productName: string;
};

declare type VideoController = {
  adapterRAM: number;
  caption: string;
  currentBitsPerPixel: number;
  currentHorizontalResolution: number;
  currentNumberOfColors: number;
  currentRefreshRate: number;
  currentVerticalResolution: number;
  description: string;
  driverDate: string;
  driverVersion: string;
  manufacturer: string;
  maxRefreshRate: number;
  minRefreshRate: number;
  name: string;
  videoModeDescription: string;
  videoProcessor: string;
};
```

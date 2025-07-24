
    export type RemoteKeys = 'designSystem/components';
    type PackageType<T> = T extends 'designSystem/components' ? typeof import('designSystem/components') :any;
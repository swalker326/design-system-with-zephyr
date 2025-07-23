
    export type RemoteKeys = 'designSystem/button';
    type PackageType<T> = T extends 'designSystem/button' ? typeof import('designSystem/button') :any;
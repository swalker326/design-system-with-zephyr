
    export type RemoteKeys = 'design_system/button';
    type PackageType<T> = T extends 'design_system/button' ? typeof import('design_system/button') :any;
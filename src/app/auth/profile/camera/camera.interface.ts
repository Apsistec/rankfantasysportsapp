export interface Image {
    // The base64 encoded string representation of the image, if using CameraResultType.Base64.
    base64String ?: string;
    // The url starting with 'data:image/jpeg;base64,' and the base64 encoded string representation of the image, if using CameraResultType.DataUrl.
    dataUrl ?: string;
    // Exif data, if any, retrieved from the image
    exif ?: any;
    // The format of the image. Currently, only "jpeg" is supported.
    format: string;
    // If using CameraResultType.Uri, the path will contain a full, platform-specific file URL that can be read later using the Filesystem API.
    path ?: string;
    // webPath returns a path that can be used to set the src attribute of an image for efficient loading and rendering.
    webPath ?: string;
}


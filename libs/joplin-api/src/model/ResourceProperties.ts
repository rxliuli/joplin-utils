import { BaseProperties } from './BaseProperties'

export interface ResourceProperties extends BaseProperties {
  /**
   *
   */
  mime: string
  /**
   *
   */
  filename: string
  /**
   *
   */
  file_extension: string
  /**
   *
   */
  encryption_blob_encrypted: number
  /**
   *
   */
  size: number
}

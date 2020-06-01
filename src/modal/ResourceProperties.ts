export interface ResourceProperties {
  /**
   *
   */
  id: string
  /**
   * The resource title.
   */
  title: string
  /**
   *
   */
  mime: string
  /**
   *
   */
  filename: string
  /**
   * When the resource was created.
   */
  created_time: number
  /**
   * When the resource was last updated.
   */
  updated_time: number
  /**
   * When the resource was created. It may differ from created_time as it can be manually set by the user.
   */
  user_created_time: number
  /**
   * When the resource was last updated. It may differ from updated_time as it can be manually set by the user.
   */
  user_updated_time: number
  /**
   *
   */
  file_extension: string
  /**
   * text
   */
  encryption_cipher_: string
  /**
   *
   */
  encryption_applied: number
  /**
   *
   */
  encryption_blob_encrypted: number
  /**
   *
   */
  size: number
  /**
   *
   */
  is_shared: number
}

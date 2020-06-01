export interface FolderProperties {
  /**
   * text
   */
  id: string
  /**
   * The folder title.
   */
  title: string
  /**
   * When the folder was created.
   */
  created_time: number
  /**
   * When the folder was last updated.
   */
  updated_time: number
  /**
   * When the folder was created. It may differ from created_time as it can be manually set by the user.
   */
  user_created_time: number
  /**
   * When the folder was last updated. It may differ from updated_time as it can be manually set by the user.
   */
  user_updated_time: number
  /**
   * text
   */
  encryption_cipher_text: string
  /**
   * int
   */
  encryption_applied: number
  /**
   * text
   */
  parent_id: string
  /**
   * int
   */
  is_shared: number
}

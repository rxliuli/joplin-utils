export interface TagProperties {
    /**
     *
     */
    id: string;
    /**
     * The tag title.
     */
    title: string;
    /**
     * When the tag was created.
     */
    created_time: number;
    /**
     * When the tag was last updated.
     */
    updated_time: number;
    /**
     * When the tag was created. It may differ from created_time as it can be manually set by the user.
     */
    user_created_time: number;
    /**
     * When the tag was last updated. It may differ from updated_time as it can be manually set by the user.
     */
    user_updated_time: number;
    /**
     * text
     */
    encryption_cipher_text: string;
    /**
     *
     */
    encryption_applied: number;
    /**
     *
     */
    is_shared: number;
}
//# sourceMappingURL=TagProperties.d.ts.map
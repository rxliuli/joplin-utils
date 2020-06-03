export interface BaseProperties {
    /**
     * text
     */
    id: string;
    /**
     * When the folder was created.
     */
    created_time: number;
    /**
     * When the folder was last updated.
     */
    updated_time: number;
    /**
     * When the folder was created. It may differ from created_time as it can be manually set by the user.
     */
    user_created_time: number;
    /**
     * When the folder was last updated. It may differ from updated_time as it can be manually set by the user.
     */
    user_updated_time: number;
    /**
     * The tag title.
     */
    title: string;
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
//# sourceMappingURL=BaseProperties.d.ts.map
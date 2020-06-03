import { IntBool } from '../types/IntBool';
import { BaseProperties } from './BaseProperties';
export interface NoteProperties extends BaseProperties {
    /**
     * ID of the notebook that contains this note. Change this ID to move the note to a different notebook.
     */
    parent_id: string;
    /**
     * The note body, in Markdown. May also contain HTML.
     */
    body: string;
    /**
     * Tells whether the note is a conflict or not.
     */
    is_conflict: number;
    /**
     * numeric
     */
    latitude: number;
    /**
     * numeric
     */
    longitude: number;
    /**
     * numeric
     */
    altitude: number;
    /**
     * text
     */
    author: string;
    /**
     * The full URL where the note comes from.
     */
    source_url: string;
    /**
     * Tells whether this note is a todo or not.
     */
    is_todo: IntBool;
    /**
     * 	When the todo is due. An alarm will be triggered on that date.
     */
    todo_due: IntBool;
    /**
     * 	Tells whether todo is completed or not. This is a timestamp in milliseconds.
     */
    todo_completed: IntBool;
    /**
     * 	text
     */
    source: string;
    /**
     * 	text
     */
    source_application: string;
    /**
     * 	text
     */
    application_data: string;
    /**
     * 	int
     */
    order: number;
    /**
     * int
     */
    markup_language: number;
    /**
     * Note body, in HTML format
     */
    body_html: string;
    /**
     * If body_html is provided and contains relative URLs, provide the base_url parameter too so that all the URLs can be converted to absolute ones. The base URL is basically where the HTML was fetched from, minus the query (everything after the '?'). For example if the original page was https://stackoverflow.com/search?q=%5Bjava%5D+test, the base URL is https://stackoverflow.com/search.
     */
    base_url: string;
    /**
     * An image to attach to the note, in Data URL format.
     */
    image_data_url: string;
    /**
     * If an image is provided, you can also specify an optional rectangle that will be used to crop the image. In format { x: x, y: y, width: width, height: height }
     */
    crop_rect: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
}
//# sourceMappingURL=NoteProperties.d.ts.map
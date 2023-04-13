import { optionsApi } from './storage/Option';
import {
    OPTIONS_API_PROP,
    OPTIONS_PAGE_URL,
    OPTIONS_PAGE_URL_ALIAS,
} from './shared';

/**
 * Checks if current page is own options page
 *
 * @param context global context
 */
export function isOptionsPage(context: Window & typeof globalThis): boolean {
    const LOCAL_OPTIONS_URL_REGEX = /(localhost:|http:\/\/127\.0\.0\.1).*(\/options\.html)/;

    const OPTIONS_PAGE_URLS = [
        OPTIONS_PAGE_URL,
        OPTIONS_PAGE_URL_ALIAS,
    ];

    const { href } = context.location;
    return OPTIONS_PAGE_URLS.some((url) => url === href)
        // allow page debugging
        || LOCAL_OPTIONS_URL_REGEX.test(href);
}

/**
 * Exposes options api on options page.
 *
 * @param context global context
 */
export function exposeStorage(context: Window & typeof globalThis) {
    context[OPTIONS_API_PROP] = optionsApi;
}

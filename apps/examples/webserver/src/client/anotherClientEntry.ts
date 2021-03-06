/*******************************************************************************
 * © Apployees Inc., 2019
 * All Rights Reserved.
 ******************************************************************************/
import { clientOnly } from "./clientOnly";

/**
 * You can have more than one client entry file through the use of clientOtherEntries
 * configuration option.
 *
 * All client entry files get included in the same app.html file as top-level scripts
 * that are initially loaded when the page loads.
 *
 * Note that if this entry was specified with a key that ends with `_head`, then
 * it will be injected into the <head> portion of the appHtml file. This technique
 * is useful if the first thing you want to do is load polyfills for the current
 * browser.
 *
 * If any of these scripts had to load anything lazily by using
 *
 * `import(...).then(module=>...)`
 *
 * then those lazy scripts will only be loaded on demand and not injected into
 * the app.html file. Again, if you are using this entry to load polyfills, you
 * can check the browser and lazily load polyfills.
 *
 * Note that any file loaded with clientOtherEntries will not have hot-reload
 * enabled. If you make a change to this file or any file that is only imported
 * directly or indirectly through this file, then you will have to manually reload
 * the page to see the changes.
 */

console.log(clientOnly() + " <-- From this is just anotherClientEntry.ts");

import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/teamsTab/index.html")
@PreventIframe("/teamsTab/config.html")
@PreventIframe("/teamsTab/remove.html")
export class TeamsTab {
}

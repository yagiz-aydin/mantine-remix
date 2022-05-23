import { Octokit } from "@octokit/core";

const octokit = new Octokit({
    auth: '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'
})

const searchRepository = async (searchText) => await octokit.request('GET /search/repositories', {
    q: searchText,
    sort:"stars",
    order:"desc",
    per_pageinteger: 10
})

export {
    searchRepository
}
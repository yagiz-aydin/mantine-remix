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
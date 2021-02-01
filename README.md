# IGON.GG
Requires [Node.js](https://nodejs.org/en/).

## Setup
* clone the project
* run `npm install`

## Commands
* Start live server locally: `npm run dev` or `rollup -c -w` (stop server with CTRL+C)
* Build project `npm run build` or `rollup -c`

## Resources
* [Svelte](https://svelte.dev/)
* [Axios](https://www.npmjs.com/package/axios)
* [Agile Board](https://github.com/GVabal/iron-gg-fe/projects/1)
* [Plan](https://lucid.app/lucidspark/47b85466-5205-47e4-9ab8-1d43a0ba24b7/edit?beaconFlowId=3B743CE323A91D86#?folder_id=home&browser=icon
)
* [Design](https://www.figma.com/file/HTGFB5UQ0D4pHjBrxn6swM/IRON.GG
)

## Workflow
1. Take the ticket from Agile Board
2. Create new GIT branch with name `feat/ticket-title`, for example: `feat/header` or `feat/match-details`
3. implement changes in your branch. Write commit messages in such style: `Add header`, `Fix profile icon`, `Update style`, etc. Messages should not be too abstract, for example `Make changes`, `Fix bug` and should not be in past tense, like `Updated component` or `Added component`.
4. Once the feature is ready, make a pull request.
5. ONLY when your pull request gets approval, then merge it with master branch.

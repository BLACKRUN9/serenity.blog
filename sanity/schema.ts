import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import airdrop from './schemas/airdrop'
import giveaways from './schemas/giveaways'
import snippet from './schemas/snippet'
import legal from './schemas/legal'
import author from './schemas/author'
import tags from './schemas/tags'
import latest from './schemas/latest'
import series from './schemas/series'
import pressRelease from './schemas/pressRelease'
import profiles from './schemas/profiles'
import openSource from './schemas/openSource'
import about from './schemas/about'
import contact from './schemas/contact'
import event from './schemas/event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, pressRelease,event, airdrop, giveaways, latest, author, legal, category, contact,profiles,blockContent,tags,series,openSource,snippet,about],
}

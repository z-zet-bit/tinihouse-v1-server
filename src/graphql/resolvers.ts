import { IResolvers } from 'apollo-server-express'
import { listings, Listing } from '../listings'

export const resolvers: IResolvers = {
    Query: {
        listings: (): Listing[] => listings
    },

    Mutation: {
        deleteListing: (_root: undefined, { id }: { id: string }): Listing => {
            for (let i = 0; i < listings.length; i++) {
                if (listings[i].id === id) {
                    return listings.splice(i, 1)[0]
                }
            }

            throw new Error('failed to delete listing')
        }
    }
}
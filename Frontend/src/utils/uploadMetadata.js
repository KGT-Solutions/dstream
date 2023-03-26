// Import the NFTStorage class and File constructor from the 'nft.storage' package
import { NFTStorage } from 'nft.storage'

// Paste your NFT.Storage API key into the quotes:
const NFT_STORAGE_KEY = process.env.REACT_APP_NFTSTORAGE_KEY;

/**
  * Reads an image file from `imagePath` and stores an NFT with the given name and description.
  * @param {File} video the path to an image file
  * @param {string} name a name for the NFT
  * @param {string} description a text description for the NFT
  * @param {string} ageCategory a text description for the NFT
  */
export async function storeNFT(video, name, description, ageCategory) {

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the image & metadata
    return nftstorage.store({
      image: video,
      name,
      description,
      ageCategory,
    })
}
//This is the code to process collection of images to get there metadata and image .webp extension
const fs=require('fs')
const path=require('path')
const sharp=require('sharp')
const {faker} = require('@faker-js/faker')
const { info } = require('console')
const input= './movie_characters'
const output= './outputs';

let img_counter =1
const imgSize = {width:500,height:500}
const desired_ext = '.webp'
const base_uri = 'https://ipfs.io/ipfs/QmVUfgoKsC8c95ceKm2dPoQXvAfGdHeHX2ZNXbuFUYqQDJ'
const attributes = {
   
    actors: [
        'The Rock',
        'Keanu Reeves',
        'Bruce Lee',
        'Tom Cruise',
        'Leonardo D Capriyo',
        'Arnold',
        'Rober Patrick',
    ],

}

fs.readdirSync(input).forEach((file) =>{
    const original_ext= path.extname(file)
    const original_file_name = path.basename(file).split('.')[0]
    
    if('.jpg','.png','.gif', '.jpeg', '.webp'){
        const id= img_counter

        const metadata = {
            id,
            name: `MovieHolic NFT #${id}`,
            description: 'Your favourite movie character collection. Mint and collect the hottest NFTs around.',
            price: 1,
            image: base_uri + id + desired_ext,
            demand: faker.random.numeric({min:10,max:100}),
            characterName:original_file_name,
            attribues: [
               { trait_type: 'Actor',
                value: attributes.actors.sort(()=> 0.5- Math.random())[0]
            },

            {
                display_type: 'date',
                trait_type: 'Created',
                value: Date.now()
            },

            {
                display_type: 'number',
                trait_type: 'generation',
                value: 1
            },

            ]

        }

        if(fs.existsSync(`${input}/${original_file_name +original_ext}`)) {
            sharp(`${input}/${original_file_name +original_ext}`)
            .resize(imgSize.height, imgSize.width)
            .toFile(`${output}/${id+ desired_ext}`, (err,info)=>console.log(err))

        fs.writeFileSync(`${output}/${id}.json`, JSON.stringify(metadata),{
            encoding: 'utf-8',
            flaf:'w',
        })
        }
        console.log(metadata)
        img_counter++
    }
})


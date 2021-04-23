#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const archiver = require('archiver')('zip')

const extPackageJson = require('../package.json')
const DEST_DIR = path.join(__dirname, '../dist')
const DEST_ZIP_DIR = path.join(__dirname, '../archive')

const extractExtensionData = () => ({
    name: extPackageJson.name,
    version: extPackageJson.version
})

const makeDestZipDirIfNotExists = () => {
    if (!fs.existsSync(DEST_ZIP_DIR)) {
        fs.mkdirSync(DEST_ZIP_DIR)
    }
}

const buildZip = (src, dist, zipFilename) => {
    console.info(`Building ${zipFilename}...`)
    const output = fs.createWriteStream(path.join(dist, zipFilename))

    archiver.pipe(output)
    archiver.directory(src, false)
    archiver.finalize()
}

const main = () => {
    const { version } = extractExtensionData()
    const zipFilename = `v${version}.zip`

    makeDestZipDirIfNotExists()
    buildZip(DEST_DIR, DEST_ZIP_DIR, zipFilename)
}

main()

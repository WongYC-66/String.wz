const fs = require('node:fs');
const { diskWriter, parseXML } = require('./utility.js');
const { MBdataFormatting,
    MobIdDataFormatting,
    ConsumeItemIdDataFormatting,
    EtcItemIdDataFormatting,
    EqpItemIdDataFormatting,
} = require('./dataFormatting.js');

function MB() {
    const obj = parseXML('./MonsterBook.img.xml')
    const simpleData = MBdataFormatting(obj)
    diskWriter('./data_MB.json', simpleData)
}

function Mob() {
    const obj = parseXML('./Mob.img.xml')
    const simpleData = MobIdDataFormatting(obj)
    diskWriter('./data_Mob.json', simpleData)
}

function Consume() {
    const obj = parseXML('./Consume.img.xml')
    const simpleData = ConsumeItemIdDataFormatting(obj)
    diskWriter('./data_Consume.json', simpleData)
}

function Etc() {
    const obj = parseXML('./Etc.img.xml')
    const simpleData = EtcItemIdDataFormatting(obj)
    diskWriter('./data_Etc.json', simpleData)
}

function Eqp() {
    const obj = parseXML('./Eqp.img.xml')
    const simpleData = EqpItemIdDataFormatting(obj)
    diskWriter('./data_Eqp.json', simpleData)
}

function main() {
    MB()
    Mob()
    Consume()
    Etc()
    Eqp()
}

main()
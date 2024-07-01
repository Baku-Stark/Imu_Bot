exports.SERVICES = {
    "command_folder_used":"service"
}

exports.GuildCheck = (req_guild_id) => {
    const GuildsPermissions = [
        "633340730441728001",
        "1246843774454464583"
    ]
    
    // VERIFICAR SE O ID DA MENSAGEM [SERVIDOR] EXISTE NO ARRAY DE PERMISSÃO
    return GuildsPermissions.includes(req_guild_id)
}

exports.Bot_Images = {
    "icon": 'https://media.discordapp.net/attachments/1246845244742303774/1246845363718066287/imu_icon.png?ex=665ddebb&is=665c8d3b&hm=9212b6164214aeb45ece31bf5847d96ea74c603ca157db19950f6c98ee5bd27d&=&format=webp&quality=lossless',
    "banner" : 'https://media.discordapp.net/attachments/1246845244742303774/1246845363051167814/134f3d359622c59a248f624a7c4bb98d.jpg?ex=665ddebb&is=665c8d3b&hm=3548cbd9d4e23d84b378a10ca43e2ebd27f4af19c2d0a5ced46d0c97058dfea5&=&format=webp&width=527&height=411'
}

exports.Guild_Roles = {
    "adm" : "1252374354780491796",
}

exports.Guild_Images = {
    "icon" : "https://media.discordapp.net/attachments/1246845244742303774/1256744600933236878/spright_logo.png?ex=66828ade&is=6681395e&hm=52322f3a4d8b984a6452900f62664b50216d0d5f0b5697e354d6d20f96781e5e&=&format=webp&quality=lossless&width=463&height=463",
    "logo" : "https://media.discordapp.net/attachments/1246845244742303774/1257115021163368488/image.png?ex=66833b19&is=6681e999&hm=54d55671c45c08eb254d5ac6eb8258e9e6ce1f2d82fde8613a89bf2a5e605516&=&format=webp&quality=lossless"
}
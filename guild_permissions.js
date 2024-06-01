exports.GuildCheck = (req_guild_id) => {
    const GuildsPermissions = [
        "633340730441728001"
    ]

    for(const guild_id of GuildsPermissions){
        return (req_guild_id == guild_id) ? true : false;
    }
}
### interaction.user

```json
{
  id: string,
  bot: false,
  system: false,
  flags: UserFlagsBitField { key: value },
  username: string,
  globalName: string,
  discriminator: '0',
  avatar: string,
  banner: undefined,
  accentColor: undefined,
  avatarDecoration: null
}
```

---

### interaction.member

```json
{
  guild: <ref *1> Guild {
    id: '633340730441728001',
    name: 'Oficina — Nasod',
    icon: '5fecd24568a54539f19c52b2710b7589',
    features: [ 'COMMUNITY', 'NEWS' ],
    commands: GuildApplicationCommandManager {
      permissions: [ApplicationCommandPermissionsManager],
      guild: [Circular *1]
    },
    members: GuildMemberManager { guild: [Circular *1] },
    channels: GuildChannelManager { guild: [Circular *1] },
    bans: GuildBanManager { guild: [Circular *1] },
    roles: RoleManager { guild: [Circular *1] },
    presences: PresenceManager {},
    voiceStates: VoiceStateManager { guild: [Circular *1] },
    stageInstances: StageInstanceManager { guild: [Circular *1] },
    invites: GuildInviteManager { guild: [Circular *1] },
    scheduledEvents: GuildScheduledEventManager { guild: [Circular *1] },
    autoModerationRules: AutoModerationRuleManager { guild: [Circular *1] },
    available: true,
    shardId: 0,
    splash: null,
    banner: null,
    description: null,
    verificationLevel: 1,
    vanityURLCode: null,
    nsfwLevel: 0,
    premiumSubscriptionCount: 0,
    discoverySplash: null,
    memberCount: 6,
    large: false,
    premiumProgressBarEnabled: false,
    applicationId: null,
    afkTimeout: 300,
    afkChannelId: null,
    systemChannelId: null,
    premiumTier: 0,
    widgetEnabled: null,
    widgetChannelId: null,
    explicitContentFilter: 2,
    mfaLevel: 0,
    joinedTimestamp: 1716674356510,
    defaultMessageNotifications: 1,
    systemChannelFlags: SystemChannelFlagsBitField { bitfield: 0 },
    maximumMembers: 500000,
    maximumPresences: null,
    maxVideoChannelUsers: 25,
    maxStageVideoChannelUsers: 50,
    approximateMemberCount: null,
    approximatePresenceCount: null,
    vanityURLUses: null,
    rulesChannelId: '1055274799997390858',
    publicUpdatesChannelId: '1055274799997390859',
    preferredLocale: 'pt-BR',
    safetyAlertsChannelId: null,
    ownerId: '303321235679477760',
    emojis: GuildEmojiManager { guild: [Circular *1] },
    stickers: GuildStickerManager { guild: [Circular *1] }
  },
  joinedTimestamp: 1571070597119,
  premiumSinceTimestamp: null,
  nickname: null,
  pending: false,
  communicationDisabledUntilTimestamp: null,
  user: User {
    id: '303321235679477760',
    bot: false,
    system: false,
    flags: UserFlagsBitField { bitfield: 64 },
    username: 'walle_satoru',
    globalName: 'Walle_',
    discriminator: '0',
    avatar: 'e2768e0c0ae405a3f9ffd677fd67c31e',
    banner: undefined,
    accentColor: undefined,
    avatarDecoration: null
  },
  avatar: null,
  flags: GuildMemberFlagsBitField { bitfield: 0 }
}
```
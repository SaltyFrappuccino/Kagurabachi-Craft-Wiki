# Commands

This page lists all the custom commands added by Kagurabachi Craft. They are intended for server administrators, map makers, and testers. All commands require a permission level of 2 or higher.

The root command is `/kbc`. The general structure is `/kbc <action> <subject> [targets] <value>`. The `[targets]` argument is optional and will default to the player executing the command if not specified.

### Set Commands (`/kbc set ...`)
Used to directly set a player's stat or level to a specific value.

| Subject | Arguments | Description |
| :--- | :--- | :--- |
| `seMastery` | `<value> [targets]` | Sets the Spiritual Energy Mastery level (0-10). |
| `handToHandMastery` | `<value> [targets]` | Sets the Martial Arts Mastery level (0-5). |
| `swordMastery` | `<value> [targets]` | Sets the Kenjutsu Mastery level (0-5). |
| `currentSE` | `<value> [targets]` | Sets the current Spiritual Energy amount. |
| `sorceryType` | `<value> [targets]` | Sets the Sorcery Type (e.g., "Enten", "FlameBone"). |

---
### Add Commands (`/kbc add ...`)
Used to add experience points or unlock content for a player.

| Subject | Arguments | Description |
| :--- | :--- | :--- |
| `seMasteryXp` | `<value> [targets]` | Adds a specified amount of XP to SE Mastery. |
| `handToHandMasteryXp` | `<value> [targets]` | Adds a specified amount of XP to Martial Arts Mastery. |
| `swordMasteryXp` | `<value> [targets]` | Adds a specified amount of XP to Kenjutsu Mastery. |
| `style` | `<value> [targets]` | Unlocks a specific Style for the player (e.g., "Iai_White_Purity"). |

---
### Remove Commands (`/kbc remove ...`)
Used to lock content for a player.

| Subject | Arguments | Description |
| :--- | :--- | :--- |
| `style` | `<value> [targets]` | Locks a previously unlocked Style for the player. |

---
### Debug Commands (`/kbc debug ...`)
Used for testing specific mod features.

| Subject | Arguments | Description |
| :--- | :--- | :--- |
| `clash` | | Starts a single-player test version of a Style Clash. |
| `setAbsorbedAttack` | `<attack_id> [param_value]` | For Enten Sorcery, sets a specific attack as "absorbed" and ready to be countered. |

---
**Example Usage:**
- `/kbc set seMastery 5 PlayerName` - Sets PlayerName's SE Mastery to level 5.
- `/kbc add swordMasteryXp 100 @a` - Gives all players 100 Kenjutsu XP.
- `/kbc set sorceryType FlameBone` - Sets your own Sorcery to FlameBone.
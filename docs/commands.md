# Commands

This page lists all the custom commands added by Kagurabachi Craft. They are intended for server administrators, map makers, and testers. All commands require a permission level of 2 or higher.

| Command | Arguments | Description |
| :--- | :--- | :--- |
| **Mastery Levels** | | |
| `kbc_setSEMastery` | `<targets> <level>` | Sets the Spiritual Energy Mastery level (0-10) for the target player(s). |
| `kbc_setHandToHandMastery` | `<targets> <level>` | Sets the Martial Arts Mastery level (0-5) for the target player(s). |
| `kbc_setSwordMastery` | `<targets> <level>` | Sets the Kenjutsu Mastery level (0-5) for the target player(s). |
| **Experience Points** | | |
| `kbc_addSEMasteryXP` | `<targets> <amount>` | Adds a specified amount of XP to the SE Mastery of the target(s). |
| `kbc_addHandToHandMasteryXP`| `<targets> <amount>` | Adds a specified amount of XP to the Martial Arts Mastery of the target(s). |
| `kbc_addSwordMasteryXP` | `<targets> <amount>` | Adds a specified amount of XP to the Kenjutsu Mastery of the target(s). |
| **Player Stats** | | |
| `kbc_setCurrentSE` | `<targets> <amount>` | Sets the current Spiritual Energy amount for the target(s). |
| `kbc_setSorceryType` | `<targets> <type>` | Sets the Sorcery Type (e.g., "Enten") for the target(s). |

**Example Usage:**
`/kbc_setSEMastery PlayerName 5` - Sets PlayerName's SE Mastery to level 5.
`/kbc_addSwordMasteryXP @a 100` - Gives all players 100 Kenjutsu XP.
# Sumika sorcery protection audit

`Special / G` gives its owner one 30% dodge roll per incoming attack. Canonical attacks roll in `AttackData`; raw damage rolls in the damage event, so player targets do not receive a second hidden roll for the same hit. Manifestation presentation no longer grants a temporary blanket invulnerability.

## Guaranteed targeted-technique protection

Guaranteed protection is explicit rather than inferred from a registered sorcery id. Kurotsuchi is blocked only for these player and NPC actions:

- Primary: `kurotsuchi_gravity_pressure`
- Supportive 1: `kurotsuchi_wide_gravity_pressure`
- Supportive 2: `kurotsuchi_gravity_collapse`
- NPC equivalents with the `npc_` prefix

Kurotsuchi Secondary, Utility, passive pressure and Awakening are not guaranteed misses. Their damage uses the normal 30% roll where it passes through the canonical damage pipeline.

Existing direct target rejection remains explicit for Gansui, Shiba Teleportation and Storehouse. Authored action-lock sources are checked separately through `PlayerActionFlags`; they do not turn ordinary melee or all damage from a sorcery user into guaranteed misses.

Self-attacks are excluded. Any new guaranteed immunity must add its stable attack id deliberately; registering a new sorcery never grants automatic blanket protection.

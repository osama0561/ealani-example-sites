---
version: alpha
name: Ealani Real Business Examples
description: Arabic proof microsites for real Saudi local businesses, clearly labeled as unofficial example work.
colors:
  primary: "#101820"
  ink: "#101820"
  paper: "#FAF9F5"
  muted: "#6B665E"
  line: "#E9E2D6"
  orange: "#C05207"
  gold: "#8A4A00"
  blue: "#1C69D4"
  violet: "#5E6AD2"
  black: "#05070B"
  white: "#FFFFFF"
typography:
  display:
    fontFamily: DM Sans
    fontSize: 4.5rem
    fontWeight: 700
    lineHeight: 0.96
    letterSpacing: "-0.055em"
  h2:
    fontFamily: DM Sans
    fontSize: 2.25rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  body:
    fontFamily: system-ui
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: ui-monospace
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  sm: 6px
  md: 14px
  lg: 24px
  pill: 9999px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: 14px
  card-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-muted:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: 8px
  border-line:
    backgroundColor: "{colors.line}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 8px
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: 14px
  button-blue:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: 14px
  button-violet:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: 14px
  panel-black:
    backgroundColor: "{colors.black}"
    textColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: 24px
---

## Overview

This DESIGN.md governs the standalone اعلاني example-sites repo. The work must look like high-end design studies, not vibe-coded cards. Each microsite has its own design posture mapped to the business category:

- Automotive: BMW-inspired dark cinematic precision, sharp geometry, blue used only for interaction.
- Salon: Apple-inspired clean premium whitespace, soft neutral surfaces, single conversion path.
- Electronics: Vercel/Linear-inspired technical retail clarity, sharp product comparison and trust flow.

## Colors

Use the اعلاني orange only for the showcase shell and cross-site brand context. Individual business pages can use category-specific accents, but must stay restrained and functional.

## Typography

Use DM Sans/system fonts for broad Arabic compatibility and crisp Latin names. Display type should be compressed and confident; Arabic body copy should stay readable with generous line-height.

## Layout

Each page must include: unofficial-example disclaimer, public facts, hero, primary CTA, offer/decision section, trust/process section, location/address section, and a footer that repeats the non-client disclaimer.

## Components

Cards are allowed only when they carry real conversion content: service menu, package, proof cue, process step, or CTA. Avoid filler metrics.

## Do's and Don'ts

Do clearly label every page as an unofficial design example. Do not claim the businesses are clients. Do not invent phone numbers, prices, awards, ownership, or business-specific guarantees. Use supplied rating/review/address facts only.

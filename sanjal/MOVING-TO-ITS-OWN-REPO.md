# This directory is temporary

Sanjal is **not** part of Himalaya Cannabis. It is a separate product and should
be a separate company and repository — mixing a cannabis company's site with a
diaspora social app hurts the credibility of both, and it makes the eventual
split messier the longer it waits.

It is parked here only because the session that built it could not create a new
GitHub repository (the connected GitHub app has no repo-creation permission), and
this branch was the only durable place to put the work.

## Moving it out

Create an empty repository on GitHub first — call it `sanjal`, private, and do
**not** let GitHub add a README, .gitignore or licence, so the first push is
clean. Then:

```bash
git clone --branch claude/nepali-diaspora-social-superapp-97q8hj \
  https://github.com/MrLaxmanKafle/HIMALAYACANNABIS.git /tmp/carrier

cp -R /tmp/carrier/sanjal ~/sanjal
cd ~/sanjal
rm MOVING-TO-ITS-OWN-REPO.md

git init -b main
git add -A
git commit -m "Sanjal Phase 0: deadline tracker, life-admin guides, city hub frame"
git remote add origin git@github.com:MrLaxmanKafle/sanjal.git
git push -u origin main
```

Then run it:

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Afterwards, clean up here

Once the new repository has the code, remove this directory from the Himalaya
Cannabis repo so the two projects stop sharing a history:

```bash
git rm -r sanjal
```

Also revert the two lines that were added to keep this staging copy out of the
cannabis site's toolchain: `"sanjal"` in `tsconfig.json`'s `exclude`, and
`"sanjal/**"` in `eslint.config.mjs`'s `globalIgnores`.

## Then

Read `docs/BLUEPRINT.md` for the strategy, `docs/ARCHITECTURE.md` for how the
code is arranged and what Phase 1 changes, and `docs/SEEDING.md` before touching
a city hub.

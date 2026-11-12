# Asset delivery plan — not deployed

Current originals: 299,234,978 bytes. WebP320/640/1024 totals: 6,922,102 /26,765,528 /68,632,028 bytes. Current disk allocation of dist: about424MiB; filesystem allocation differs from logical transfer bytes. Keep originals and their hashes as archival/source assets; no originals were removed or recompressed in this pass.

Recommended next packaging split (requires implementation and revalidation):
1. Source/archive package retains all original PNGs, audit records and licenses, excluding secrets and local history.
2. Web delivery can use all three WebP sizes plus a compatible compressed JPEG fallback instead of serving archival PNGs. Generate loss-limited derivatives, check symbols at desktop/mobile, update the fallback manifest, and preserve original files separately. This can avoid roughly299MB of archival PNG in the deployed web artifact; exact replacement savings must be measured, not promised.
3. Do not simply delete PNGs from dist: current CardArtwork fallback references them. Do not deploy a knowingly broken fallback.
4. All responsive sources remain local, lazy-gallery loaded; no external CDN or paid service is necessary. Archive originals can be separately downloadable only after a hosting target and release policy are chosen.
5. Maintain complete project/content/art and third-party notices in every relevant deliverable. No public-network benchmark, hosting quota or CDN bill is yet verified.

Current priority is correctness and reproducible packaging, not reducing candidate fidelity or hiding unresolved Wheel symbolism. No hosting or Git push has been performed.

## Implemented isolated web artifact
`npm run build:web` generates JPEG quality90/4:4:4 fallback files with locally installed ImageMagick, preserving original PNG hashes. It stages assets under .staging and builds separate dist-web; normal dist/dev remain unchanged. No external service, key or deployment. No source original deletion.

Measured logical totals: normal dist402,150,085 bytes; dist-web198,529,042 bytes, about50.6% smaller. JPEG fallback total95,613,935 bytes. Both variants retain all license notices. The verifier checks78 original hashes,78 JPEG hashes,234 unchanged WebP variants,vector back and all compiled fallback references. A fallback is not silently removed.

JPEG visual equivalence is NOT yet manually certified; inspect high-detail symbols before choosing this artifact for release. Existing WebP responsive delivery is unchanged. Normal PNG-based dist remains available. No public-network timing or hosting quotas have been measured.

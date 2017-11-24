import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResource = (ir: MdIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const avatarDir = `${imgDir}/avatar`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
}
import { LinkPreset } from '@/types/config'
import I18nKey from '@i18n/i18nKey'
import { i18n } from '@i18n/translation'
import { navBarConfig } from '@/config'

export const LinkPresets = navBarConfig.links.map(link => {
  const i18nName = i18n(I18nKey[link.name.toLowerCase()]);
  if (!i18nName) {
    console.warn(`Warning: Missing i18n for ${link.name}. Using the original name.`);
    return {
      name: link.name,
      url: link.url,
      external: !!link.external
    };
  }
  return {
    name: i18nName,
    url: link.url,
    external: !!link.external
  };
});
/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    media: Media;
    pages: Page;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    pages: PagesSelect<false> | PagesSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
  globalsSelect: {
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  pageTitle: string;
  slug: string;
  layout?:
    | (HeroBlock | CalltoActionBlock | RichText | FaqBlock | FeaturesBlock | GridCardsBlock | QuoteBlock | LogosBlock)[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  heroHeading?: string | null;
  heroText?: string | null;
  heroImage?: (string | null) | Media;
  heroButtons?: Buttons;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Buttons".
 */
export interface Buttons {
  primaryLabel?: string | null;
  primaryLink?: string | null;
  secondaryLabel?: string | null;
  secondaryLink?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CalltoActionBlock".
 */
export interface CalltoActionBlock {
  ctaHeading?: string | null;
  ctaText?: string | null;
  ctaButtons?: Buttons;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Cta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichText".
 */
export interface RichText {
  richText?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'RichText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FaqBlock".
 */
export interface FaqBlock {
  faqHeading?: string | null;
  faqText?: string | null;
  faqs?:
    | {
        question?: string | null;
        answer?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Faq';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FeaturesBlock".
 */
export interface FeaturesBlock {
  featuresHeading?: string | null;
  featuresText?: string | null;
  features?:
    | {
        featureIcon?: (string | null) | Media;
        title?: string | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Features';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "GridCardsBlock".
 */
export interface GridCardsBlock {
  gridCardsHeading?: string | null;
  gridCardsText?: string | null;
  gridcards?:
    | {
        image?: (string | null) | Media;
        title?: string | null;
        link?: string | null;
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'GridCards';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "QuoteBlock".
 */
export interface QuoteBlock {
  quoteHeading?: string | null;
  quoteText?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Quote';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LogosBlock".
 */
export interface LogosBlock {
  logosHeading?: string | null;
  logosText?: string | null;
  logos?:
    | {
        logo?: (string | null) | Media;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'Logos';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        desktop?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  pageTitle?: T;
  slug?: T;
  layout?:
    | T
    | {
        Hero?:
          | T
          | {
              heroHeading?: T;
              heroText?: T;
              heroImage?: T;
              heroButtons?:
                | T
                | {
                    primaryLabel?: T;
                    primaryLink?: T;
                    secondaryLabel?: T;
                    secondaryLink?: T;
                  };
              id?: T;
              blockName?: T;
            };
        Cta?:
          | T
          | {
              ctaHeading?: T;
              ctaText?: T;
              ctaButtons?:
                | T
                | {
                    primaryLabel?: T;
                    primaryLink?: T;
                    secondaryLabel?: T;
                    secondaryLink?: T;
                  };
              id?: T;
              blockName?: T;
            };
        RichText?:
          | T
          | {
              richText?: T;
              id?: T;
              blockName?: T;
            };
        Faq?:
          | T
          | {
              faqHeading?: T;
              faqText?: T;
              faqs?:
                | T
                | {
                    question?: T;
                    answer?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        Features?:
          | T
          | {
              featuresHeading?: T;
              featuresText?: T;
              features?:
                | T
                | {
                    featureIcon?: T;
                    title?: T;
                    description?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        GridCards?:
          | T
          | {
              gridCardsHeading?: T;
              gridCardsText?: T;
              gridcards?:
                | T
                | {
                    image?: T;
                    title?: T;
                    link?: T;
                    text?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        Quote?:
          | T
          | {
              quoteHeading?: T;
              quoteText?: T;
              id?: T;
              blockName?: T;
            };
        Logos?:
          | T
          | {
              logosHeading?: T;
              logosText?: T;
              logos?:
                | T
                | {
                    logo?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  logo?: (string | null) | Media;
  navItems?:
    | {
        label?: string | null;
        link?: {
          relationTo: 'pages';
          value: string | Page;
        } | null;
        menu?: Submenu[] | null;
        id?: string | null;
      }[]
    | null;
  primaryButtonLabel?: string | null;
  primaryButtonLink?: string | null;
  secondaryButtonLabel?: string | null;
  secondaryButtonLink?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Submenu".
 */
export interface Submenu {
  submenu?:
    | {
        label?: string | null;
        link?: {
          relationTo: 'pages';
          value: string | Page;
        } | null;
        subenuIcon?: (string | null) | Media;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'submenublock';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  navItemsFooter?:
    | {
        label?: string | null;
        link?: {
          relationTo: 'pages';
          value: string | Page;
        } | null;
        menu?: SubmenuFooter[] | null;
        id?: string | null;
      }[]
    | null;
  logo?: (string | null) | Media;
  copyrightNotice?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SubmenuFooter".
 */
export interface SubmenuFooter {
  submenufooter?:
    | {
        label?: string | null;
        link?: {
          relationTo: 'pages';
          value: string | Page;
        } | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'submenublockfooter';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  logo?: T;
  navItems?:
    | T
    | {
        label?: T;
        link?: T;
        menu?:
          | T
          | {
              submenublock?:
                | T
                | {
                    submenu?:
                      | T
                      | {
                          label?: T;
                          link?: T;
                          subenuIcon?: T;
                          description?: T;
                          id?: T;
                        };
                    id?: T;
                    blockName?: T;
                  };
            };
        id?: T;
      };
  primaryButtonLabel?: T;
  primaryButtonLink?: T;
  secondaryButtonLabel?: T;
  secondaryButtonLink?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  navItemsFooter?:
    | T
    | {
        label?: T;
        link?: T;
        menu?:
          | T
          | {
              submenublockfooter?:
                | T
                | {
                    submenufooter?:
                      | T
                      | {
                          label?: T;
                          link?: T;
                          id?: T;
                        };
                    id?: T;
                    blockName?: T;
                  };
            };
        id?: T;
      };
  logo?: T;
  copyrightNotice?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
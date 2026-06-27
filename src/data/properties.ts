export interface Property {
  id: string
  name: string
  country: string
  url: string
}

export type CountryFilter =
  | 'All'
  | 'Cambodia'
  | 'Indonesia'
  | 'Laos'
  | 'Philippines'
  | 'Thailand'
  | 'Vietnam'

export const COUNTRIES: CountryFilter[] = [
  'All',
  'Cambodia',
  'Indonesia',
  'Laos',
  'Philippines',
  'Thailand',
  'Vietnam',
]

export const PROPERTIES: Property[] = [
  { id: 'koh-rong', name: 'Koh Rong', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-koh-rong' },
  { id: 'koh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: '' },
  { id: 'phnom-penh', name: 'Phnom Penh', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-phnom-penh' },
  { id: 'siem-reap', name: 'Siem Reap', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-siem-reap' },
  { id: 'kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'gili-t', name: 'Gili T', country: 'Indonesia', url: '' },
  { id: 'kuta-lombok', name: 'Kuta Lombok', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-kuta-lombok' },
  { id: 'nusa-lembongan', name: 'Nusa Lembongan', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-nusa-lembongan' },
  { id: 'uluwatu', name: 'Uluwatu', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-uluwatu' },
  { id: 'luang-prabang', name: 'Luang Prabang', country: 'Laos', url: '' },
  { id: 'vang-vieng', name: 'Vang Vieng', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/4th-july-foam-party' },
  { id: 'dumaguete', name: 'Dumaguete', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-dumaguete' },
  { id: 'manila', name: 'Manila', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-manila' },
  { id: 'nacpan-beach', name: 'Nacpan Beach', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-nacpan' },
  { id: 'panglao', name: 'Panglao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-panglao' },
  { id: 'siargao', name: 'Siargao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-siargao' },
  { id: 'siquijor', name: 'Siquijor', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/july-4th-event-mad-monkey-siquijor' },
  { id: 'bangkok', name: 'Bangkok', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-bangkok' },
  { id: 'chiang-mai', name: 'Chiang Mai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-chiang-mai' },
  { id: 'pai', name: 'Pai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-pai' },
  { id: 'phuket', name: 'Phuket', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/4th-of-july-event-mad-monkey-phuket' },
  { id: 'hanoi', name: 'Hanoi', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/hanoi-old-quarter-s-biggest-4th-of-july-event' },
  { id: 'hoi-an', name: 'Hoi An', country: 'Vietnam', url: '' },
]

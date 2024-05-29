export interface QueryLaunchpad {
  upcoming: boolean;
  $text: {
    $search: string;
  }
}

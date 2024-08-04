import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PodsNameParser from "./podsnameparser"

export default function TabsDemo() {
  return (
    <Tabs defaultValue="General" className="w-[100vw]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="General">General</TabsTrigger>
        <TabsTrigger value="APPRRA">APPRRA</TabsTrigger>
        <TabsTrigger value="NBR">NBR</TabsTrigger>
        <TabsTrigger value="Utilty">Utilty</TabsTrigger>
      </TabsList>
      <TabsContent value="General">
        <Tabs defaultValue="CRTO" className="w-[100vw]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="CRTO">CRTO</TabsTrigger>
          </TabsList>
          <TabsContent value="CRTO">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&gd=NobwRALgngDgpmAXGA5gJwPYFd4BMAiAlgLZwB2AzoRmWADRi4CGETAKrAshRGoWSnphCuJGADCTMkzRQhAGyYAjOPLGTpsoYQriMxYjSS8scBtggwsEAHJNS6qTLkMAZoXkQ4aAOKYcFEigYBZWtvZcEjS8GGpuHl5oSODQ8GL8Qu6e3hxpyPI6EEK4JORURsgA6nBKAAQAyt4Abt61AJIwxSxMQWCGAO4AHgC0AKyjAJyuE7hKSgAsAOzD8wBs8gBW%2FUIDI%2BNTM3NLKwBeFBQAjjsYQ2OT07MLy5MUq6tgALoMTUzypoGIYB9G57e6HJ4rdZba63fYPI7LeZnS4w0EHR7HF5vT4AXxxdHAoWsdgcyDYcB4mQS3mSkE46Vo8WyaFykQKlIYJVIlGotCqNQazVaHS6rF6u2GAA4lBNJRMAMbzeUTMYwFAAJmIqKlMrliuVw1WTXm6pO2ulsoVSpVq3VAGt5oEvmAfn8KeKQTrLfqVaM1ZrzbqrQajSazQwJRa9dbDfbHbicc6uWVeWJqnVGmgWmh2p1E0A%3D%3D&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mopt=N4IgkgdgLgpgThAhgGwAQBUCWBbGB7AVylQFJUAKACQCFUBBAgYykzwlQAVE4XHMAHRNADOAShAAuUP0khkbAOYgANCABusgHIqQAE0kAmVYlnIYAMyggAvtaA%3D%3D&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa2oBdGgReXJQMezkujm4%2BARpJaQ75JDMITi9BYSIAERsAAgaueARBHHxCFn3pI5PEbeSjE1QzS0inMZQaGAALZyQv14UBEqAArPVQDsWG4NJYkAAFHDHIEgh4fFijcYgSEgC4EUSKH7TFjsChzfjfISgkhE6zLEkKcQ6J7GTimCxWJa2VCgHzYTI4BAQehoABsYUlYXqQnZmK%2BOOGICaUHMZAEGCVsNVcAmmGpRACp04GgOYjgKRgBwApAcABQACQAQgcAILmBoweYHBFlL0NCAtNJIACU5zwBJYRsQJqgZo4lptSjwUHkzrdHq9%2FB9fogAaDMCpuldHgQ2C8zHUmis9E6LAo2CQ5gBipoWlTnrgrAAahA4LkiFANnAjr8%2FYIGkkYIYALJwRvN3VodBKyCwRBducLluami%2FXTT%2FlkXbkZdK3gIIIIJ1VFiCC9XjZeFZdXUNHFAA%3D&showOthers=0&sya=1&tables=HB%20Auction%20Participants&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="APPRRA">
        <Tabs defaultValue="EAST_SC" className="w-[100vw]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="EAST_SC">EAST_SC</TabsTrigger>
            <TabsTrigger value="WEST_OR">WEST_OR</TabsTrigger>
            <TabsTrigger value="APAC_SG">APAC_SG</TabsTrigger>
            <TabsTrigger value="EU_BE">EU_BE</TabsTrigger>
          </TabsList>
          <TabsContent value="EAST_SC">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&gd=NobwRALgngDgpmAXGA5gJwPYFd4BMAiAlgLZwB2AzoRmWADRi4CGETAKrAshRGoWSnphCuJGADCTMkzRQhAGyYAjOPLGTpsoYQriMxYjSS8scBtggwsEAHJNS6qTLkMAZoXkQ4aAOKYcFEigYBZWtvZcEjS8GGpuHl5oSODQ8GL8Qu6e3hxpyPI6EEK4JORURsgA6nBKAAQAyt4Abt61AJIwxSxMQWCGAO4AHgC0AOwArOO4467jAMYAHOPDMEpNxJ0MAyMTUzPzS8MAXgAWAGwoAI5C22OT07OLywDWACwnAEyuYAC6DE1MeSmQKIYB9DBDO57R6HVbrTbgyG7B4HZanC7XLYQnb3fZPYZvT7fH4AXxJdHAoWsdgcyDYcB4mQS3mSkE46Vo8WyaFykQKjIYJVIlGotCqNQazVaHS6rF6t1GcwAnHMlKMFrhXqNhh8muM0EksUjlar1Zrta9PJdMYidia1RqtcNXk0moMzr9%2FoDgfLsWN7Wanbr9Ybbf6VQ7zc6rTaFQHHRbXe7fmS%2FoxSiKKmBqnVGmgWmh2p0ST8gA&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mopt=N4IgkgtgDgTgpgZwQSwPYDsEAIAicA2yAbnPACZYAUAEgEJYBKc6ZpcFAgmQJQgBcoKPxD4MAcxAAaEEWEA5KSDL8ATNICGw%2FHABmAFxABfaQAUYqIslYwsAZVF6skWIhQZsNehwCuAYz1o6Fgm6jABvshQ6uh6CLwCIEJ8IuKKsskK0sp8aiCaydr6RtJMCFDuiFR0weaW1oyI5Zhw8YJaqdLpIJlKqhpaugbGIExEjOp6cPxtBR0y8orZufkig8XdcHoA7qgwANZYAOrIQQwTUwlJKegSnQtZfXkDRcNmFlakRyfjk9OJ7Tc0vdejl%2BgU1sMAKIAD0mMHQ6nwWB8%2FkCX3QAFI%2FldRIC7hlFo8VoUhqZzDpkI4zr9LgDbvMCQ9QU9wS9DEA&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiABEbAAIGrngEQRx8QhZ16S2dxGXkoxNUM0tIokhYRBRJmwr6TpYFwSfdmaICwaUHMQQkox4NxAJ2wZzSFze0jQ6BAcGwcwA%2BkgGiAALo0NwaSwoDCo9EwLE43EDfEgBC8XIkzBCEQsQkguBIAAKOG2AAteFAgnsHix6YyQINaMMWOwKGN%2BK9rNMZSA5ggFksdKyQABZBkADQ2JTIEBgGz8IhoBwIRH1uSNJrNFqtQiuxk4pgsVh%2BYoZSpgfOcSAFQrQAFYpTajiRFDRPvI5VxIRMWaI48qZKqYBndCabncrFNbKhQD5sJkcBr6GgAGxhBthepCT1%2BiW1WlNEFkAQYWns4nI0ArFh%2BFTBlNIDarAjuRBwVgbAAUAAkAEIbABKXGFC42AEFWABKfZ4W2j8ecyfT2ceZyuhxQeTrrc7%2BeLw%2BXfd37BeZjqTQrATIgKHRcxg0lKhhx1Ll6QSYUNgAZSgXhzTHOIr3GKdVw3fdzAaHN%2BA2LkyhzBoIBaNIkBPa0zxjWDeHgxAkJQtDLyQSclDwJ8iBfPCCPGYjSIgcjKJgJVdG%2FRBf3%2FDQtHjVVQKQcDOUg6CiG3JAGEVTllxfBimIQV8tJ0miQGjDTOW07hVPjbjnw3AzhGYzTrK0L8fz%2FNQ5KAxS0WUiCpRHEAlyXAASYA12EYiNW2PSN23KJ7wPY9ag2AAqDYAEZG0bI8NgAeg2CKnIQ5DUItdjrxwg98MIzghIQMiKIrcSj1qMyLJYbc3C3KRPGlL4QE4bAKC07Btl1fyVLUtMWHC4B0InLCbygOdkpqxLdw%2FVLCuK4BXJ07D9Lg5yjMOmz2vyzKcrCU9DiIAA5OAYFyXgEEKDYAHUFj6%2BAlFVEaxpaSbpv6KC5pCiKlswxVVvWvdNrfZLD3avaStOsrWMqjCOJWmr%2BPqxrmrE6iOoy7KG3u88QFK5ifoazd%2BoBoagasia4CmsDwfU%2BboaqlaZzWu9EZfLb3xStGiuhr61yy4jEL8eLaoEoiSKakSWqoq6Kdu6mYwAUWCXYRqgFWiYZgBSFn5DZ8bQe5yggp1UKFqixdYJEuBlfFlHdoAWn2vQkhgQxmPdmKvZ95G91R8mbtyht8ul4A6aM8q2Nx6q%2BLqwT1ZJ1qyc6uiiAYyBzSZ%2F6FNZ0b2YdgKndpLQnwIhcADUIDgXIiDWzhvYaPlSMEBoQ8MLmG6ZWk%2FnfceVMnmg%2BV0UPyzIVZyGRWl3uFNcqhYQQt8QTUAVlTkcVqIA%3D%3D&showOthers=0&sya=1&tables=HB%20Rendered%20Ad%2CHB%20Auction%20Participants%2CHB%20Provider%20Response&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
          <TabsContent value="WEST_OR">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&gd=NobwRALgngDgpmAXGA5gJwPYFd4BMAiAlgLZwB2AzoRmWADRi4CGETAKrAshRGoWSnphCuJGADCTMkzRQhAGyYAjOPLGTpsoYQriMxYjSS8scBtggwsEAHJNS6qTLkMAZoXkQ4aAOKYcFEigYBZWtvZcEjS8GGpuHl5oSODQ8GL8Qu6e3hxpyPI6EEK4JORURsgA6nBKAAQAyt4Abt61AJIwxSxMQWCGAO4AHgC0AOwArOO4467jAMYAHOPDMEpNxJ0MAyMTUzPzS8MAXgAWAGwoAI5C22OT07OLywDWACwnAEyuYAC6DE1MeSmQKIYB9DBDO57R6HVbrTbgyG7B4HZanC7XLYQnb3fZPYZvT7fH4AXxJdHAoWsdgcyDYcB4mQS3mSkE46Vo8WyaFykQKjIYJVIlGotCqNQazVaHS6rF6t1GcwAnHMlKMFrhXqNhh8muM0EksUjlar1Zrta9PJdMYidia1RqtcNXk0moMzr9%2FoDgfLsWN7Wanbr9Ybbf6VQ7zc6rTaFQHHRbXe7fmS%2FoxSiKKmBqnVGmgWmh2p0ST8gA&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgkgtgDgTgpgZwQSwPYDsEAIAicA2yAbnPACZYAUAEgEJYBKc6ZpcFAgmQJQgBcoKPxD4MAcxAAaEEWEA5KSDL8ATNICGw%2FHABmAFxABfaQAUYqIslYwsAZVF6skWIhQZsNehwCuAYz1o6Fgm6jABvshQ6uh6CLwCIEJ8IuKKsskK0sp8aiCaydr6RtJMCFDuiFR0weaW1oyI5Zhw8YJaqdLpIJlKqhpaugbGIExEjOp6cPxtBR0y8orZufkig8XdcHoA7qgwANZYAOrIQQwTUwlJKegSnQtZfXkDRcNmFlakRyfjk9OJ7Tc0vdejl%2BgU1sMAKIAD0mMHQ6nwWB8%2FkCX3QAFI%2FldRIC7hlFo8VoUhqZzDpkI4zr9LgDbvMCQ9QU9wS9DEA&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiABEbAAIGrngEQRx8QhZ16S2dxGXkoxNUM0tIokhYRBRJmwr6TpYFwSfdmaICwaUHMQQkox4NxAJ2wZzSFze0jQ6BA%2BTmAH1eHsALo0NwaSwoDCouAYrEgbEDXEgBC8XJEzBCEQsfEg0kABRw2wAFrwoEE9g8WLT6SBBrRhix2BQxvxXtZppKQHMEAsljpmSAALJ0gAaGxKZAgMA2fhENAOBCIOty%2BsNxtN5qEV2MnFMFisP2FdPlMG5ziQvP5aAArOLLUcSIoaJ95NKuJCJkzRNGFTIlTBU7pDTc7lYprZUKAfNhMjhVfQ0AA2MK1sL1IRu72i2rUpogsgCDDU1mE5GgFYsPwqAOJpAbVYEdyIOCsDYACgAEgAhDYAJS4AtnGwAgqwAJT7PBWocj0ljidTjzOJ0OKDyFfrzczud7y476%2FYLzMdSaKyxogKGwJBzADMUqAHTV2VpBIBQ2ABlKBeBNYc4nPcZxyXVcd3MBpM34DZ2TKTMGggFo0iQQ8LWPSNoN4WDEAQpCULPJAxyUPB7yIR8cLw8ZCOIiBSPImB5V0D9EC%2FH8NC0GMlSAkCwPFQcQA3JAGDlUkF0fOiGIQJ91M0qiQAjIg1I07hSQ43AuJYHSYOERjzM099P2%2FNQZP%2FeS4GA0CrOUzV53nAASYBl2EQjVW2bTVw3KIb13A9ag2AAqDYAEY6zrfcNgAeg2ULdMc%2FTEOQ01WIvLDd1w%2FDOAEhASLI0tRP3WpjNMlgNzcdcpE8CUvhAThsAodTsG2LUfMUygAqIELgFQ0cMMvKBpwSqq4q3V8krygrgGcyzMPs%2BjioMiytFanK0sysIj0OIgADk4BgXIsUKDYAHUFh6%2BAlCVIaRpacbJr88DINm0KFvQuVltW7d1ufBK91anbCocuDSpYtC2KWqreNq%2BrGpEyi2tSjLa1uk8QCKuDPrqtdet%2Bgb%2FtJQG4Am3z%2Bgg5MWDmyHsehycVuvOHHw2l9EuR%2FKIfe5d0sI%2BC%2FBi6q%2BIIoiGqEpqKIu0nropyMAFFgl2IaoGV%2FHaYAUkZ%2BRmdGoGOemrmVKCubwrnaChLgJWxcR7aAFpdr0JIYEMRi3ciz3vYR7ckZJq6strHKpeAanGIx8qscqniav4tXCea4n2poog6MgE16Z%2BuSmeGlmxrZ4H%2BmpLR7zw2cADUIDgXIiBWzgvYabliMEBpg8MdmpoZak%2Fhfce%2FMnmhuV0EOSzIVZyGRaksQFZcqhYQQt8QNUASlUkGjFIA%3D%3D&showOthers=0&sya=1&tables=HB%20Rendered%20Ad%2CHB%20Auction%20Participants%2CHB%20Provider%20Response&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
          <TabsContent value="APAC_SG">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&gd=NobwRALgngDgpmAXGA5gJwPYFd4BMAiAlgLZwB2AzoRmWADRi4CGETAKrAshRGoWSnphCuJGADCTMkzRQhAGyYAjOPLGTpsoYQriMxYjSS8scBtggwsEAHJNS6qTLkMAZoXkQ4aAOKYcFEigYBZWtvZcEjS8GGpuHl5oSODQ8GL8Qu6e3hxpyPI6EEK4JORURsgA6nBKAAQAyt4Abt61AJIwxSxMQWCGAO4AHgC0AOwArOO4467jAMYAHOPDMEpNxJ0MAyMTUzPzS8MAXgAWAGwoAI5C22OT07OLywDWACwnAEyuYAC6DE1MeSmQKIYB9DBDO57R6HVbrTbgyG7B4HZanC7XLYQnb3fZPYZvT7fH4AXxJdHAoWsdgcyDYcB4mQS3mSkE46Vo8WyaFykQKjIYJVIlGotCqNQazVaHS6rF6t1GcwAnHMlKMFrhXqNhh8muM0EksUjlar1Zrta9PJdMYidia1RqtcNXk0moMzr9%2FoDgfLsWN7Wanbr9Ybbf6VQ7zc6rTaFQHHRbXe7fmS%2FoxSiKKmBqnVGmgWmh2p0ST8gA&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgkgtgDgTgpgZwQSwPYDsEAIAicA2yAbnPACZYAUAEgEJYBKc6ZpcFAgmQJQgBcoKPxD4MAcxAAaEEWEA5KSDL8ATNICGw%2FHABmAFxABfaQAUYqIslYwsAZVF6skWIhQZsNehwCuAYz1o6Fgm6jABvshQ6uh6CLwCIEJ8IuKKsskK0sp8aiCaydr6RtJMCFDuiFR0weaW1oyI5Zhw8YJaqdLpIJlKqhpaugbGIExEjOp6cPxtBR0y8orZufkig8XdcHoA7qgwANZYAOrIQQwTUwlJKegSnQtZfXkDRcNmFlakRyfjk9OJ7Tc0vdejl%2BgU1sMAKIAD0mMHQ6nwWB8%2FkCX3QAFI%2FldRIC7hlFo8VoUhqZzDpkI4zr9LgDbvMCQ9QU9wS9DEA&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiABEbAAIGrngEQRx8QhZ16S2dxGXkoxNUM0tIokhYRBRJmwr6TpYFwSfdmaICwaUHMQQkox4NxAJ2wZzSFze0jQ6BA2BaDQA%2BkglgBdGhuDSWFAYVHorG4gZ4kAIXi5YmYIQiFgEkFwJAABRw2wAFrwoEE9g8WDS6SBBrRhix2BQxvxXtZppKQHMEAsljomSAALK0gAaGxKZAgMA2fhENAOBCIOty%2BsNxtN5qEV2MnFMFisP2FtPlMG5ziQvP5aAArOLLUcSIoaJ95NKuJCJozRNGFTIlTBU7pDTc7lYprZUKAfNhMjhVfQ0AA2MK1sL1IRu72i2pUpogsgCDBUllE5GgFYsPwqAOJpAbVYEdyIOCsDYACgAEgAhDYAJS4AtnGwAgqwAJT7PBWocjtljidTjzOJ0OKDyFfrzczud7y476%2FYLzMdSaKyxogKGwJBzADMUqAHTV2RpBIBQ2ABlKBeBNYc4nPcZxyXVcd3MBpM34DZ2TKTMGggFo0iQQ8LWPSNoN4WDEAQpCULPJAxyUPB7yIR8cLw8ZCOIiBSPImB5V0D9EC%2FH8NC0GMlSAkCwPFQcQA3JAGDlNkF0fOiGIQJ91M0qiQAjIg1I07g2Q43AuJYHSYOERjzM099P2%2FNQZP%2FeS4GA0CrOUzV53nAASYBl2EQjVW2bTVw3KIb13A9ag2AAqDYAEY6zrfcNgAeg2ULdMc%2FTEOQ01WIvLDd1w%2FDOAEhASLI0tRP3WpjNMlgNzcdcpE8CUvhAThsAodTsG2LUfMUygAqIELgFQ0cMMvKBpwSqq4q3V8krygrgGcyzMPs%2BjioMiytFanK0sysIj0OIgADk4BgXJeAQQoNgAdQWHr4CUJUhpG9E4Am3z%2Bgg5MWDmhb0LlZbVu3dbnwSvdWp2wqHLg0qWLQtilqq3javqxqRMotrUoy2tbpPEAirgr66rXXq%2FoGgG2SBkGpvAyDZtC6HcdhycVuvBHHw2l9EtR%2FLeY%2B5d0sI%2BC%2FBi6q%2BIIoiGqEpqKIu8nrqpyMAFFgl2IaoGVwn6YAUmZ%2BRWdG8bJr8rmIZAIK5vCudoKEuAlbF5HtoAWl2vQkhgQxGPdyKvZ9pHtxRsmrqy2scql4BacYrHypxyqeJq%2Fi1eJ5rSfamiiDoyATUZ365JZ4a2bG4GHf6KktHvPDZwANQgOBciIFbOG9hpuWIwQGhDwwOb8%2BkqT%2BF8J7A7saG5XRQ5LMhVnIZEqVegVlyqFhBG3xA1QBKU2QaMUgA&showOthers=0&sya=1&tables=HB%20Rendered%20Ad%2CHB%20Auction%20Participants%2CHB%20Provider%20Response&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
          <TabsContent value="EU_BE">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&gd=NobwRALgngDgpmAXGA5gJwPYFd4BMAiAlgLZwB2AzoRmWADRi4CGETAKrAshRGoWSnphCuJGADCTMkzRQhAGyYAjOPLGTpsoYQriMxYjSS8scBtggwsEAHJNS6qTLkMAZoXkQ4aAOKYcFEigYBZWtvZcEjS8GGpuHl5oSODQ8GL8Qu6e3hxpyPI6EEK4JORURsgA6nBKAAQAyt4Abt61AJIwxSxMQWCGAO4AHgC0AOwArOO4467jAMYAHOPDMEpNxJ0MAyMTUzPzS8MAXgAWAGwoAI5C22OT07OLywDWACwnAEyuYAC6DE1MeSmQKIYB9DBDO57R6HVbrTbgyG7B4HZanC7XLYQnb3fZPYZvT7fH4AXxJdHAoWsdgcyDYcB4mQS3mSkE46Vo8WyaFykQKjIYJVIlGotCqNQazVaHS6rF6t1GcwAnHMlKMFrhXqNhh8muM0EksUjlar1Zrta9PJdMYidia1RqtcNXk0moMzr9%2FoDgfLsWN7Wanbr9Ybbf6VQ7zc6rTaFQHHRbXe7fmS%2FoxSiKKmBqnVGmgWmh2p0ST8gA&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgkgtgDgTgpgZwQSwPYDsEAIAicA2yAbnPACZYAUAEgEJYBKc6ZpcFAgmQJQgBcoKPxD4MAcxAAaEEWEA5KSDL8ATNICGw%2FHABmAFxABfaQAUYqIslYwsAZVF6skWIhQZsNehwCuAYz1o6Fgm6jABvshQ6uh6CLwCIEJ8IuKKsskK0sp8aiCaydr6RtJMCFDuiFR0weaW1oyI5Zhw8YJaqdLpIJlKqhpaugbGIExEjOp6cPxtBR0y8orZufkig8XdcHoA7qgwANZYAOrIQQwTUwlJKegSnQtZfXkDRcNmFlakRyfjk9OJ7Tc0vdejl%2BgU1sMAKIAD0mMHQ6nwWB8%2FkCX3QAFI%2FldRIC7hlFo8VoUhqZzDpkI4zr9LgDbvMCQ9QU9wS9DEA&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiABEbAAIGrngEQRx8QhZ16S2dxGXkoxNUM0tIokhYRBRJmwr6TpYFwSfdmaICwaUHMQQkox4NxAJ2wZzSFze0jQ6BAcHMAH18CAALo0NwaSwoDCojFY7EDXEgBC8XJEzBCEQsfEguBIAAKOG2AAteFAgnsHixqbSQINaMMWOwKGN%2BK9rNMJSA5ggFksdIyQABZGkADQ2JTIEBgGz8IhoBwIRG1uT1BqNJrNQiuxk4pgsVh%2BQppcpgXOcSB5fLQAFYxRajiRFDRPvIpVxIRMGaIo%2FKZIqYCndAabncrFNbKhQD5sJkcCr6GgAGxhGthepCV1ekW1SlNEFkAQYSnMwnI0ArFh%2BFT%2BhNIDarAjuRBwVgbAAUAAkAEIbABKXH5M42AEFWABKfZ4S2D4es0fjyceZyOhxQeTLtcb6ez3eXbdX7BeZjqTRWGNEChsCQcx%2FVFKh%2Bw1NlqQSfkNgAZSgXhjSHOIz3GMdFxXbdzAaDN%2BA2NkygzBoIBaNIkAPc0jwjKDeBgxB4MQ5DTyQUclDwO8iAfbDcPGAiiIgEiyJgOVdHfRBP2%2FDQtGjRVAOA0CxQHEB1yQBhZVZecH1o%2BiEEfNSNMokBwyIVT1O4Vl2NwTiWG06DhAYsyNLfD8vzUaS%2FzkuAgJAyylI1Oc5wAEmAJdhAIlVti0ld1yia8d33WoNgAKg2ABGWtaz3DYAHoNhCnSHL0hCkJNFjz0wnccLwzh%2BIQYjSJLES91qIyTJYdc3DXKRPHFL4QE4bAKDU7Btk1byFMofyiGC4AUJHdCLygKd4sq2LNxfRLcvy4AnIsjC7Loor9PMrQWuy1KMrCQ9DiIAA5OAYFyXgEEKDYAHUFm6%2BAlEVQbhpaMaJt8sCIJmkL5rQ2UlpWrc1qfeLdxa7aCvs2CSuY1DWMWyqeJquqGuEijWpS9Kaxu48QEK2DPtq1cet%2B%2Fr%2FtZQG4HGnz%2BnApMWFmyHsehidlqvOGH3W58EuRvKIfepc0oIuC%2FGiqrePwwj6sExryPO0mropiMAFFgl2QaoGV%2FHaYAUkZ%2BRmZGoGOamrnlMC2awtnKDBLgJWxcRraAFodr0JIYEMBi3Yiz3vYRrckZJy7MprbKpeAamGIxsqsYq7jqr4tXCaa4m2uoohaMgY16Z%2B2SmaGlnRrZ4H%2BkpLQ71wmcADUIDgXIiGWzgvYaLkiMEBpg8MdnJrpSk%2FmfcffMnmguV0EPizIVZyGRSkXv5JcqhYQQt8QVUAUlVkGlFIA%3D%3D&showOthers=0&sya=1&tables=HB%20Rendered%20Ad%2CHB%20Auction%20Participants%2CHB%20Provider%20Response&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="NBR">
        <Tabs defaultValue="EAST_SC" className="w-[100vw]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="EAST_SC">EAST_SC</TabsTrigger>
            <TabsTrigger value="WEST_OR">WEST_OR</TabsTrigger>
            <TabsTrigger value="APAC_SG">APAC_SG</TabsTrigger>
            <TabsTrigger value="EU_BE">EU_BE</TabsTrigger>
          </TabsList>
          <TabsContent value="EAST_SC">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgCgTg9gbglgEwKYQAQGUA2UAuqCSAtgA4RIDO5cUAduagBQASAQqgIICuAxjtTajABDCH25xiQmjnIBKEAC5QxRSGw0A5iAA0IGKoByOkAkUAmXUNWYkAMxwgAvo6A%3D%3D%3D&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiAHU4XAACAGVEDwRNv1UaHHxCFnWt3YR9w%2BOhZKMTVDNLSKJIWEQUSZsK%2Bk6LAWgk%2B8AQMyIUF06Umox4zxAlx2e0QdwkfwwIBAAF0aG4NJYUJicQNcSAELxckTMLRhix2BQxvwftZpnSQHMEAsljoRCwAHK8TYAIWEm2c2CQ%2FE2AAprrdtsI4ABKQSnAhEQUisUSqWcWXy1GKoKqnSPYycUwWKzAlgUqlKAAWziQjt4UD5AFYwoNaYC2HDxiypjJ2Zzucs%2BYiNsibqijmq8BqLjHDQcE2aSharW8hJa7ZSWTBnXBXe6vb6Vix8VBCQAFHANOBuj2IZb58mFkC%2B9XnEiKGgA%2BQMrjwiZCKNiTys0P%2BmADh5Z56vKwhio%2BbCZHBc%2BhoABsYUPPveBYdtTJTVrZAEGDJNcJaBpVZAdYpCSCB22UF4MEOKhdY5ILKAASwqbAAguYDTztKdZlPODQQC0aRIKaIC9kQr68O%2BRrfr%2Bfj%2FqWgFKHgUDyKBEFQTB%2BpwQgCFIZuMAsro4H7NgXjMOomhWEORAUJK5gut2ZJaGR0FwKwABqEBwLkkILHAmwNI68GCA0SQwIYACycACUJt40KCiASTpemlo%2BZKOtCvAbmQAAi5AWTQvAIB%2BwpVCwgguR%2B3IQvSpYNN2QA%3D%3D&showOthers=0&sya=1&tables=HB%20Auction%20Participants&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
          <TabsContent value="WEST_OR">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgCgTg9gbglgEwKYQAQGUA2UAuqCSAtgA4RIDO5cUAduagBQASAQqgIICuAxjtTajABDCH25xiQmjnIBKEAC5QxRSGw0A5iAA0IGKoByOkAkUAmXUNWYkAMxwgAvo6A%3D%3D%3D&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiAHU4XAACAGVEDwRNv1UaHHxCFnWt3YR9w%2BOhZKMTVDNLSKJIWEQUSZsK%2Bk6LAWgk%2B8AQMyIUF06Umox4zxAlx2e0QdwkfwwIBAAF0aG4NJYUJicQNcSAELxckTMLRhix2BQxvwftZpnSQHMEAsljoRCwAHK8TYAIWEm2c2CQ%2FE2AAprrdtsI4ABKQSnAhEQUisUSqWcWXy1GKoKqnSPYycUwWKzAlgUqlKAAWziQjt4UD5AFYwoNaYC2HDxiypjJ2Zzucs%2BYiNsibqijmq8BqLjHDQcE2aSharW8hJa7ZSWTBnXBXe6vb6Vix8VBCQAFHANOBuj2IZb58mFkC%2B9XnEiKGgA%2BQMrjwiZCKNiTys0P%2BmADh5Z56vKwhio%2BbCZHBc%2BhoABsYUPPveBYdtTJTVrZAEGDJNcJaBpVZAdYpCSCB22UF4MEOKhdY5ILKAASwqbAAguYDTztKdZlPODQQC0aRIKaIC9kQr68O%2BRrfr%2Bfj%2FqWgFKHgUDyKBEFQTB%2BpwQgCFIZuMAsro4H7NgXjMOomhWEORAUJK5gut2ZJaGR0FwKwABqEBwLkkILHAmwNI68GCA0SQwIYACycACUJt40KCiASTpemlo%2BZKOtCvAbmQAAi5AWTQvAIB%2BwpVCwgguR%2B3IQvSpYNN2QA%3D%3D&showOthers=0&sya=1&tables=HB%20Auction%20Participants&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
          <TabsContent value="APAC_SG">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgCgTg9gbglgEwKYQAQGUA2UAuqCSAtgA4RIDO5cUAduagBQASAQqgIICuAxjtTajABDCH25xiQmjnIBKEAC5QxRSGw0A5iAA0IGKoByOkAkUAmXUNWYkAMxwgAvo6A%3D%3D%3D&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiAHU4XAACAGVEDwRNv1UaHHxCFnWt3YR9w%2BOhZKMTVDNLSKJIWEQUSZsK%2Bk6LAWgk%2B8AQMyIUF06Umox4zxAlx2e0QdwkfwwIBAAF0aG4NJYUJicQNcSAELxckTMLRhix2BQxvwftZpnSQHMEAsljoRCwAHK8TYAIWEm2c2CQ%2FE2AAprrdtsI4ABKQSnAhEQUisUSqWcWXy1GKoKqnSPYycUwWKzAlgUqlKAAWziQjt4UD5AFYwoNaYC2HDxiypjJ2Zzucs%2BYiNsibqijmq8BqLjHDQcE2aSharW8hJa7ZSWTBnXBXe6vb6Vix8VBCQAFHANOBuj2IZb58mFkC%2B9XnEiKGgA%2BQMrjwiZCKNiTys0P%2BmADh5Z56vKwhio%2BbCZHBc%2BhoABsYUPPveBYdtTJTVrZAEGDJNcJaBpVZAdYpCSCB22UF4MEOKhdY5ILKAASwqbAAguYDTztKdZlPODQQC0aRIKaIC9kQr68O%2BRrfr%2Bfj%2FqWgFKHgUDyKBEFQTB%2BpwQgCFIZuMAsro4H7NgXjMOomhWEORAUJK5gut2ZJaGR0FwKwABqEBwLkkILHAmwNI68GCA0SQwIYACycACUJt40KCiASTpemlo%2BZKOtCvAbmQAAi5AWTQvAIB%2BwpVCwgguR%2B3IQvSpYNN2QA%3D%3D&showOthers=0&sya=1&tables=HB%20Auction%20Participants&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
          <TabsContent value="EU_BE">
            <iframe src="https://samurai.access.mn/#/reporting/Header%20Bidder?bz=0&cs=gw&heatMapType=off&ia=0&il=0&iscum=0&isout=0&isst=0&ist=0&mkm=0&mopt=N4IgCgTg9gbglgEwKYQAQGUA2UAuqCSAtgA4RIDO5cUAduagBQASAQqgIICuAxjtTajABDCH25xiQmjnIBKEAC5QxRSGw0A5iAA0IGKoByOkAkUAmXUNWYkAMxwgAvo6A%3D%3D%3D&namespace=Header%20Bidder&pc=1&selection=N4IgZglgNgLgpgJwM4gFwG1RQIYCM5RogAqEAtnCADQgwCeADpaiACblwB2SEA9t9RARWRUhUGtsMbMUbNaHQfDIM0YbFCRwaEJAGFeZMvzQwEAV21sp2NKGm4iCAlIgA3SjQDmCBgElOVjgADzQABh1AkPCaBmc3PnN9XnNOGDROcygoGgB3ODgAawMVbGc7azoMrKgAXxoAY0MGMt1%2BWSYiSToSlvLa%2Bvs5Lo5uPgEaSWkO%2BSQzCE4vQWEiAHU4XAACAGVEDwRNv1UaHHxCFnWt3YR9w%2BOhZKMTVDNLSKJIWEQUSZsK%2Bk6LAWgk%2B8AQMyIUF06Umox4zxAlx2e0QdwkfwwIBAAF0aG4NJYUJicQNcSAELxckTMLRhix2BQxvwftZpnSQHMEAsljoRCwAHK8TYAIWEm2c2CQ%2FE2AAprrdtsI4ABKQSnAhEQUisUSqWcWXy1GKoKqnSPYycUwWKzAlgUqlKAAWziQjt4UD5AFYwoNaYC2HDxiypjJ2Zzucs%2BYiNsibqijmq8BqLjHDQcE2aSharW8hJa7ZSWTBnXBXe6vb6Vix8VBCQAFHANOBuj2IZb58mFkC%2B9XnEiKGgA%2BQMrjwiZCKNiTys0P%2BmADh5Z56vKwhio%2BbCZHBc%2BhoABsYUPPveBYdtTJTVrZAEGDJNcJaBpVZAdYpCSCB22UF4MEOKhdY5ILKAASwqbAAguYDTztKdZlPODQQC0aRIKaIC9kQr68O%2BRrfr%2Bfj%2FqWgFKHgUDyKBEFQTB%2BpwQgCFIZuMAsro4H7NgXjMOomhWEORAUJK5gut2ZJaGR0FwKwABqEBwLkkILHAmwNI68GCA0SQwIYACycACUJt40KCiASTpemlo%2BZKOtCvAbmQAAi5AWTQvAIB%2BwpVCwgguR%2B3IQvSpYNN2QA%3D%3D&showOthers=0&sya=1&tables=HB%20Auction%20Participants&timezone=Asia%2FKolkata"></iframe>
          </TabsContent>
        </Tabs>
      </TabsContent>
      <TabsContent value="Utilty">
        <Tabs defaultValue="podsnameparse" className="w-[100vw]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="podsnameparse">Pods Name Parser</TabsTrigger>
            <TabsTrigger value="sanitychecker">Sanity Checker</TabsTrigger>
            <TabsTrigger value="links">Links</TabsTrigger>
          </TabsList>
          <TabsContent value="podsnameparse">
            <PodsNameParser />
          </TabsContent>
          <TabsContent value="sanitychecker">
            <iframe src="https://vaibhavkhandare.github.io/Sanity_checker/"></iframe>
          </TabsContent>
          <TabsContent value="links">
            <div className="flex items-center justify-center h-[1g000px] bg-gray-100">
              <div className="bg-white p-8 rounded shadow-lg">
                <ol className="relative border-s border-gray-200 dark:border-gray-700 w-[400px]">
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      <a
                        href="http://tree.mn/Video-AdExchange/ad-exchange/-/tags"
                        target="_blank"
                      >
                        Create New Tag
                      </a>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Create a new Tag, oldTag + 1
                    </p>
                  </li>
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      <a
                        href="http://ci.internal.media.net/job/mowx/job/mowx-deploy-pipeline/"
                        target="_blank"
                      >
                        Deploy Pipeline
                      </a>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      
                      Deploy the Tag
                      
                    </p>
                  </li>
                  <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                      <svg
                        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                      <a
                        href="http://ci.internal.media.net/job/ProgrammaticBuying/job/ssx/job/EBDA/job/mowx-sanity-x/"
                        target="_blank"
                      >
                        Sanity X
                      </a>
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      Check Tag on Sanity
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </TabsContent>
    </Tabs>
  );
}

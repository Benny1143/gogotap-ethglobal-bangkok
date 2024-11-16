<!-- TITLE -->
<p align="center">
  <img width="100px" src="https://github.com/user-attachments/assets/b0bdd258-880b-4196-8f0a-ff1f9927c245" align="center" alt="Celo" />
 <h2 align="center">GoGoTap</h2>
 <p align="center">
   Tap, Config and Be Free.
   <br />
   A stress-free solution providing allowance for your child's usage at school.
 </p>
</p>


<!-- ABOUT THE PROJECT -->

## About The Project

> Worrying that your child might misuse the cash that you gave to them? Fret not GoGoTap is here to the rescue.

GoGoTap is a payment ecosystem where it aims to provide parents with an ease of mind when giving allowance to their child. It’s aimed at tackling the problems that arise from the heavily cash based payment system that canteen vendors use in K-12 schools. Giving a young child physical cash allowance opens up risk as it might be misused (used to purchase illegal substances) or in some cases get extorted or lost. As such GoGoTap is aimed at preventing such cases. Using MiniPay app, parents are able to register physical wallets using Arx’s Halo NFC tags, these tags can be in different forms for the child’s needs. Registering the physical wallet on GoGoTap through MiniPay allows parents to set the amount of allowance they would like to charge to the wallet.

Parents can set either a monthly, weekly or daily allowance in the account and at every interval period the account will be top-up to the set allowance limit. This prevents the account from accumulating value every cycle.

These wallets are tagged to a smart contract where only valid vendors (receivers) that are authorized by the parent are allowed to draw cash out of the wallet. An additional pin is required by the child to provide on the interface to allow the transaction to occur.

Through GoGoTap parents are able to authorize the vendors through the school’s ENS domain name. Vendors are required to get validated by the school TLD to get permission to be part of the schools ENS. As such, once the parents authorize the wallet to be used in a specific school, all vendors who are authorized in the school are able to call the smart contract to receive cash. This provides a layer of validation that only vendors that are validated by the school which are authorized by the parent can grant access to the child’s wallet.

Likewise on the vendor end, the NFC tag is required to be present and tapped on the mobile device with GoGoTap within MiniPay. Vendors will type the price they would like to charge the child, upon tapping the device with the NFC tag, a smart contract will trigger and request the child for a pin which would then finalize the transaction and charge the wallet accordingly.

In addition parents are also allowed to observe and track their child’s expenses, ensuring that their allowances are spent in proper manner. Detailing each transaction who received the cash via the ENS name which the vendor owns. Providing a statistics dashboard for the parent to observe the child’s spending habits.

To allow fallbacks, the wallet can be terminated and withdrawn anytime by the parent in the case it’s being misused. In addition, parents are also able to digitally transfer the physical wallet to another physical wallet in the case that the physical wallet is missing or damaged.

All and all GoGoTap is your one stop stress free solution when providing cash allowance for your child’s school uses.

## Built With

GoGoTap is built with multiple technologies to provide ease of use for parents.

- [Celo MiniPay](https://www.opera.com/products/minipay)
- [ARX HaLo Chips](https://arx.org/)
- [ENS](https://ens.domains/)
- [Nouns DAO](https://nouns.wtf/)

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

- [Benny's Linkedin](https://www.linkedin.com/in/bennygo/)

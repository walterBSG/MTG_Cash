# MTG_Cash

MTG_Cash is an Artificial Intelligence that evaluates the price of a Magic The Gathering (MTG) card using Natural Language Processing (NLP).

## Dependencies

In order to use MTG_Cash, you will need to have the following packages installed:
- TensorFlow
- Pandas
- Numpy

## Usage

To use MTG_Cash, follow these steps:
1. Open the `card.txt` file and insert the text of the MTG card you want to evaluate.
2. Run the `mtg-cash-use.py` file.

The text format must be structured as follows:

`1 W W Enchantment Artifact and enchantment spells your opponents cast cost {2} more to cast.
Sacrifice Aura of Silence: Destroy target artifact or enchantment. 10E uncommon {'commander': 'Legal', 'duel': 'Legal', 'legacy': 'Legal', 'modern': 'Legal', 'premodern': 'Legal', 'vintage': 'Legal'} True`

The "True" at the end of the text indicates if the card is foil.

The data and format used by MTG_Cash are from the [json file on MTGJSON.com](https://mtgjson.com/).

## Future Improvements

Here are some of the planned improvements for MTG_Cash:
- Better output format
- Improved input format (e.g. by name, ID, etc.)
- Refined dataset
- Easier process for retraining
- Implement visualization of results using graphs and charts to better understand the data.
- Batch prediction capability

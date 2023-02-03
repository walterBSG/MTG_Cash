# MTG_Cash

An AI that uses NLP to read and evaluate the price of a given Magic The Gathering card.

## Dependencies

- TensorFlow
- Pandas
- Numpy

## Usage

1. Put the text of the card in the `card.txt` file.
2. Run the `mtg-cash-use.py` file.

The text format must follow the pattern as the example:

'1 W W Enchantment Artifact and enchantment spells your opponents cast cost {2} more to cast.
Sacrifice Aura of Silence: Destroy target artifact or enchantment. 10E uncommon {'commander': 'Legal', 'duel': 'Legal', 'legacy': 'Legal', 'modern': 'Legal', 'premodern': 'Legal', 'vintage': 'Legal'} True'


The "True" in the end of the text is to indicate if the card is foil.

The data and format is from the [json file on MTGJSON.com](https://mtgjson.com/).

## TODO

- Improve output format
- Improve input format (by name, ID, etc.)
- Refine the dataset
- Create an easy training process for retraining
- Implement batch prediction

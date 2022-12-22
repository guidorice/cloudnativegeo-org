---
title: STAC
description: SpatioTemporal Asset Catalogs (STAC) organize the cloud-native geospatial formats
    for searchability, providing a common, accessible metadata language to enable
    discovery.
---

![STAC](/images/stac_200.png)

# {% $markdoc.frontmatter.title %}

{% $markdoc.frontmatter.description %}

## JSON example

STAC item example code:

```json
{
    "stac_version": "1.0.0",
    "type": "Feature",
    "id": "20201211_223832_CS2",
    "bbox": [],
    "geometry": {},
    "properties": {},
    "collection": "simple-collection",
    "links": [],
    "assets": {}
}
```

## Python example

[PySTAC](https://pystac.readthedocs.io/) example code

```python
import json
import shutil
import tempfile
from datetime import date
from pathlib import Path

from pystac import Catalog, get_stac_version
from pystac.extensions.eo import EOExtension
from pystac.extensions.label import LabelExtension

root_catalog = Catalog.from_file("./example-catalog/catalog.json")
print(f"ID: {root_catalog.id}")
print(f"Title: {root_catalog.title or 'N/A'}")
print(f"Description: {root_catalog.description or 'N/A'}")
```

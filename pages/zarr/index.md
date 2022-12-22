---
title: Zarr
description: Zarr excels at storage of large N-dimensional typed arrays on the
    cloud, and is used extensively for climate and weather modeling.
---

![zarr](/images/zarr_200.png)

# {% $markdoc.frontmatter.title %}

{% $markdoc.frontmatter.description %}

## Python example

```python
z1 = zarr.open('data/example.zarr', mode='w', shape=(10000, 10000),
                chunks=(1000, 1000), dtype='i4')
```

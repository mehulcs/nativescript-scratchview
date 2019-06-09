# Nativescript Scratch View
Nativescript plugin to implement scratch card functionality. 


## Installation

Run the following command from the root of your project:

```javascript
tns plugin add nativescript-scratchview
```

## Usage 

You need to add `xmlns:sv="nativescript-scratchview"` to your page tag, and then simply use `<sv:ScratchView>` in order to add the widget to your page.
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" xmlns:sv="nativescript-scratchview">
  <GridLayout rows="*" columns="*">
	<sv:ScratchView  id="scratchView" height="250"  width="250"  strokeWidth="10" revealed="{{revealed}}"  percentRevealed="{{percentRevealed}}">
	  <Image  height="250"  width="250"  stretch="aspectFill"  src="~/images/back.jpg"></Image>
	  <Image  height="250"  width="250"  stretch="aspectFill"  src="~/images/scratch.jpg"></Image>
	</sv:ScratchView>
  </GridLayout>
</Page>
```

## API    
| Property | Default | Description |
| --- | --- | --- |
| strokeWidth | 10 | Scratching stroke width |

### Events
* **revealed**  
Triggered when the scratch view is 100% scratched.

* **percentRevealed**  
Triggered every time scratch view is scratched.
	**Parameters**
	event.percent - percentage of scratch view scratched

### Methods
* **reveal**  
Clear scratch and reveal behind view.
    
## License

Apache License Version 2.0, January 2004
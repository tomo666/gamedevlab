---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2D Layers

2D Layers are hierarchical overlays that lives in the game world's 2D space. Think of it like layers that you use in graphic authoring applications like Photoshop. The 2D layers that you create are attached to the utmost parent layer: UIBaseLayer, which controls all the child 2D Layers that are dynamically created during game play.


Following snippet shows how to create a black background layer and a text layer to blit texts.

<Tabs groupId="scripts">
  <TabItem value="jbeventscript" label="JBML">
```xml title="Creating two 2D layers example. One for black background and one to blit text."
<JBML Name="Game">
	<Function Name="Start">
		<!-- Create background layer with visible, black color -->
		<Layer Name="BackgroundLayer" IsActive="True" Red="0.0" Green="0.0" Blue="0.0" Alpha="1.0" />
		<!-- Create transparent text layer to blit texts -->
		<Layer Name="TextLayer" IsActive="True" Alpha="0.0" />
	</Function>
	<Function Name="Update" />
</JBML>
```
	</TabItem>
  <TabItem value="jbasic" label="JBASIC">
```visual-basic title="Creating 2D layers"
DIM BackgroundLayer AS Layer
DIM TextLayer AS Layer

FUNCTION Start()
	' Create background layer
	BackgroundLayer = JBCreateLayer()
	' Create text layer
	TextLayer = JBCreateLayer()

	' Set layers active
	BackgroundLayer.SetActive(1)
	TextLayer.SetActive(1)

	' Set background color (black) with no alpha
	BackgroundLayer.SetColor(0.0, 0.0, 0.0)
	BackgroundLayer.SetAlpha(1.0)
	' Set text layer transparent 
  TextLayer.SetAlpha(0.0)
END FUNCTION

FUNCTION Update()
END FUNCTION

// Compile: Generate code JBGE.GameEngine ---
/*
"\n", ";\n"
"DIM\s+(.*?)\s+AS\s+(.*?)$", "\2 \1;"
"FUNCTION\s+Start()", "[JBScript_Start] public static void Start() {"
"FUNCTION\s+(.*?)", 
"END\s+FUNCTION", "}"
"JBCreate", "new "
*/
```
	</TabItem>
  <TabItem value="jbscript" label="JB Script">
```csharp title="Creating 2D layers"
using JBScript;
using JBGE.GameEngine;

namespace MyGame {
	public static class Game {
		public static Layer BackgroundLayer;
		public static Layer TextLayer;

		[JBScript_Start]
		public static void Start() {
			// Create background layer
			BackgroundLayer = new Layer();
			// Create text layer
			TextLayer = new Layer();

			// Set background color (black) with no alpha
			BackgroundLayer.SetColor(0.0f, 0.0f, 0.0f);
			BackgroundLayer.SetAlpha(1.0f);
			// Set text layer transparent 
      TextLayer.SetAlpha(0.0f);
		}

		[JBScript_Update]
		public static void Update() {}
	}
}
```
	</TabItem>
</Tabs>

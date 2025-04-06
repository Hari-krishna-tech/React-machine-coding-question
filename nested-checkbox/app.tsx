import { useState } from "react";
import "./styles.css";

interface Node {
  key: number;
  name: string;
  children: Node[];
}
const dataWhole: Node[] = [
  // Parent 1: Space & Fantasy Mix
  {
    key: 1,
    name: "Galactic Command Center",
    children: [
      {
        key: 101,
        name: "Starship Phoenix",
        children: [
          {
            key: 111,
            name: "Dragon's Lair Bridge",
            children: [
              {
                key: 1111,
                name: "Engine Room Gryphon",
                children: [
                  {
                    key: 11111,
                    name: "Warp Core Unicorn",
                    children: [
                      { key: 111111, name: "Dilithium Pixie", children: [] },
                      { key: 111112, name: "Antimatter Sprite", children: [] },
                    ],
                  },
                  {
                    key: 11112,
                    name: "Impulse Engine Gnome",
                    children: [
                      { key: 111121, name: "Plasma Goblin", children: [] },
                    ],
                  },
                ],
              },
              {
                key: 1112,
                name: "Navigation Sphinx",
                children: [
                  {
                    key: 11121,
                    name: "Sensor Array Chimera",
                    children: [
                      { key: 111211, name: "Long-Range Fairy", children: [] },
                      {
                        key: 111212,
                        name: "Short-Range Brownie",
                        children: [],
                      },
                      { key: 111213, name: "Cloaking Dryad", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 112,
            name: "Griffin's Galley",
            children: [
              {
                key: 1121,
                name: "Replicator Centaur",
                children: [
                  {
                    key: 11211,
                    name: "Food Synthesizer Ogre",
                    children: [
                      { key: 112111, name: "Pizza Troll", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 102,
        name: "Nebula Noodle Bar",
        children: [
          {
            key: 121,
            name: "Cosmic Cafe",
            children: [
              {
                key: 1211,
                name: "Astro Appetizers",
                children: [
                  {
                    key: 12111,
                    name: "Meteor Meatballs",
                    children: [
                      {
                        key: 121111,
                        name: "Spicy Sausage Asteroid",
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                key: 1212,
                name: "Planetary Pastries",
                children: [
                  {
                    key: 12121,
                    name: "Jupiter Jellies",
                    children: [
                      { key: 121211, name: "Strawberry Swirl", children: [] },
                    ],
                  },
                  {
                    key: 12122,
                    name: "Saturn Scones",
                    children: [
                      { key: 121221, name: "Blueberry Blast", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // Parent 2: Silly Adjectives & Animals
  {
    key: 2,
    name: "Wobbly Walrus Workshop",
    children: [
      {
        key: 201,
        name: "Giggling Goose Garage",
        children: [
          {
            key: 211,
            name: "Fluffy Fox Forge",
            children: [
              {
                key: 2111,
                name: "Sparkly Squirrel Station",
                children: [
                  {
                    key: 21111,
                    name: "Dancing Dolphin Desk",
                    children: [
                      { key: 211111, name: "Singing Seal Seat", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: 212,
            name: "Bouncing Badger Bench",
            children: [
              {
                key: 2121,
                name: "Chirping Chipmunk Chest",
                children: [
                  {
                    key: 21211,
                    name: "Prancing Pony Press",
                    children: [
                      {
                        key: 212111,
                        name: "Rolling Rabbit Roller",
                        children: [],
                      },
                      {
                        key: 212112,
                        name: "Hopping Hamster Hammer",
                        children: [],
                      },
                    ],
                  },
                ],
              },
              {
                key: 2122,
                name: "Waving Weasel Workbench",
                children: [
                  {
                    key: 21221,
                    name: "Yawning Yak Yoke",
                    children: [
                      { key: 212211, name: "Zany Zebra Zipper", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 202,
        name: "Sleepy Sloth Shed",
        children: [
          {
            key: 221,
            name: "Quiet Quokka Quarters",
            children: [], // Kept this branch shallow
          },
        ],
      },
    ],
  },
  // Parent 3: Magical Forest Theme
  {
    key: 3,
    name: "Enchanted Grove Entrance",
    children: [
      {
        key: 301,
        name: "Whispering Willow Way",
        children: [
          {
            key: 311,
            name: "Faerie Ring Clearing",
            children: [
              {
                key: 3111,
                name: "Mushroom Circle",
                children: [
                  {
                    key: 31111,
                    name: "Glowing Moss Patch",
                    children: [
                      { key: 311111, name: "Dewdrop Den", children: [] },
                    ],
                  },
                  {
                    key: 31112,
                    name: "Moonpetal Meadow",
                    children: [
                      { key: 311121, name: "Starlight Stream", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 302,
        name: "Ancient Oak Path",
        children: [
          {
            key: 321,
            name: "Hidden Hollow",
            children: [
              {
                key: 3211,
                name: "Crystal Cave",
                children: [
                  {
                    key: 32111,
                    name: "Echoing Chamber",
                    children: [
                      { key: 321111, name: "Gemstone Geode", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  // Parent 4: Pirate Treasure Theme
  {
    key: 4,
    name: "Captain Blackheart's Ship",
    children: [
      {
        key: 401,
        name: "Crow's Nest Lookout",
        children: [
          {
            key: 411,
            name: "Treasure Map Room",
            children: [
              {
                key: 4111,
                name: "Secret Island Chart",
                children: [
                  {
                    key: 41111,
                    name: "'X' Marks the Spot",
                    children: [
                      { key: 411111, name: "Buried Gold Chest", children: [] },
                      { key: 411112, name: "Ruby Riddle", children: [] },
                    ],
                  },
                ],
              },
              {
                key: 4112,
                name: "Kraken Compass",
                children: [
                  {
                    key: 41121,
                    name: "Siren's Sextant",
                    children: [
                      { key: 411211, name: "Pearl Predictor", children: [] },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CheckBox = ({ data, checkedState, setCheckedState }) => {
  const handleChange = (isChecked: boolean, node: any): void => {
    if (!node) return;
    setCheckedState((prev) => {
      const newState = { ...prev, [node.key]: isChecked };

      const handleChildren = (node: any) => {
        node.children?.forEach((child) => {
          newState[child.key] = isChecked;
          handleChildren(child);
        });
      };
      handleChildren(node);

      const verifyAll = (node) => {
        if (node.children.length == 0) return newState[node.key] || false;

        let allChecked = true;
        // node.children.every((child) => verifyAll(child));
        for (const child of node.children) {
          if (!verifyAll(child)) {
            allChecked = false;
          }
        }
        newState[node.key] = allChecked;

        return allChecked;
      };

      dataWhole.forEach((node) => {
        console.log(node);
        verifyAll(node);
      });

      console.log(newState);
      return newState;
    });
  };
  return (
    <div>
      {data?.map((node) => {
        return (
          <div key={node.key} className="parent">
            <input
              type={"checkbox"}
              checked={checkedState[node.key] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <span>{node.name}</span>
            {node.children && (
              <CheckBox
                data={node.children}
                checkedState={checkedState}
                setCheckedState={setCheckedState}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

interface CheckedState {
  [key: string]: boolean;
}

export default function App() {
  const [checkedState, setCheckedState] = useState<CheckedState>({});
  return (
    <div className="App">
      <CheckBox
        data={dataWhole}
        checkedState={checkedState}
        setCheckedState={setCheckedState}
      />
    </div>
  );
}


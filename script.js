// script.js
const optionCategories = [
    {
        category: 'Basic Gameplay',
        settings: [
            'Difficulty',
            'DayTimeSpeedRate',
            'NightTimeSpeedRate',
            'ExpRate',
            'PalCaptureRate',
            'PalSpawnNumRate',
            'PalDamageRateAttack',
            'PalDamageRateDefense',
            'PlayerDamageRateAttack',
            'PlayerDamageRateDefense'
        ]
    },
    {
        category: 'Pal Behavior',
        settings: [
            'PalStomachDecreaseRate',
            'PalStaminaDecreaseRate',
            'PalAutoHPRegeneRate',
            'PalAutoHpRegeneRateInSleep'
        ]
    },
    {
        category: 'Player Stats',
        settings: [
            'PlayerStomachDecreaseRate',
            'PlayerStaminaDecreaseRate',
            'PlayerAutoHPRegeneRate',
            'PlayerAutoHpRegeneRateInSleep'
        ]
    },
    {
        category: 'World Interaction',
        settings: [
            'BuildObjectDamageRate',
            'BuildObjectDeteriorationDamageRate',
            'CollectionDropRate',
            'CollectionObjectHpRate',
            'CollectionObjectRespawnSpeedRate',
            'EnemyDropItemRate',
            'DeathPenalty',
            'bEnablePlayerToPlayerDamage',
            'bEnableFriendlyFire',
            'bEnableInvaderEnemy',
            'bActiveUNKO',
            'bEnableAimAssistPad',
            'bEnableAimAssistKeyboard',
            'DropItemMaxNum',
            'DropItemMaxNum_UNKO'
        ]
    },
    {
        category: 'Server Settings',
        settings: [
            'BaseCampMaxNum',
            'BaseCampWorkerMaxNum',
            'DropItemAliveMaxHours',
            'bAutoResetGuildNoOnlinePlayers',
            'AutoResetGuildTimeNoOnlinePlayers',
            'GuildPlayerMaxNum',
            'PalEggDefaultHatchingTime',
            'WorkSpeedRate',
            'bIsMultiplay',
            'bIsPvP',
            'bCanPickupOtherGuildDeathPenaltyDrop',
            'bEnableNonLoginPenalty',
            'bEnableFastTravel',
            'bIsStartLocationSelectByMap',
            'bExistPlayerAfterLogout',
            'bEnableDefenseOtherGuildPlayer',
            'CoopPlayerMaxNum',
            'ServerPlayerMaxNum'
        ]
    },
    {
        category: 'Server Configuration',
        settings: [
            'ServerName',
            'ServerDescription',
            'AdminPassword',
            'ServerPassword',
            'PublicPort',
            'PublicIP',
            'RCONEnabled',
            'RCONPort',
            'Region',
            'bUseAuth',
            'BanListURL'
        ]
    }
];

const optionDescriptions = {
    'Difficulty': 'None - Doesn\'t seem to matter for dedicated servers.',
    'DayTimeSpeedRate': 'Changes how long daytime lasts.',
    'NightTimeSpeedRate': 'Changes how long night lasts.',
    'ExpRate': 'Modifies how much experience you get.',
    'PalCaptureRate': 'How likely you are to capture Pals.',
    'PalSpawnNumRate': 'How frequently Pals spawn.',
    'PalDamageRateAttack': 'How much damage Pals do.',
    'PalDamageRateDefense': 'How much damage Pals take.',
    'PlayerDamageRateAttack': 'How much damage players do.',
    'PlayerDamageRateDefense': 'How much damage players take.',
    'PlayerStomachDecreaseRate': 'Rate at which hunger decreases.',
    'PlayerStaminaDecreaseRate': 'Rate at which stamina decreases',
    'PlayerAutoHPRegeneRate': 'How quickly HP will be automatically restored when hurt.',
    'PlayerAutoHpRegeneRateInSleep': 'How much HP is regenerated while sleeping.',
    'PalStomachDecreaseRate': 'Rate at which Pal hunger decreases.',
    'PalStaminaDecreaseRate': 'Rate at which Pal stamina decreases',
    'PalAutoHPRegeneRate': 'How quickly Pal HP will be automatically restored when hurt.',
    'PalAutoHpRegeneRateInSleep': 'How much Pal HP is regenerated while sleeping.',
    'BuildObjectDamageRate': 'Damage to objects.',
    'BuildObjectDeteriorationDamageRate': 'How much damage built objects will take over time.',
    'CollectionDropRate': 'Rate at which items are gathered from things like trees or rocks.',
    'CollectionObjectHpRate': 'How much HP breakable world items have.',
    'CollectionObjectRespawnSpeedRate': 'How quickly objects like trees respawn.',
    'EnemyDropItemRate': 'Frequency enemies will drop items.',
    'DeathPenalty': 'Determines what is dropped on death. Can be set to none.',
    'bEnableAimAssistPad': 'Lets you enable or disable aim assist',
    'bEnableAimAssistKeyboard': 'Lets you enable or disable aim assist',
    'DropItemMaxNum': 'Max amount of dropped items allowed at one time.',
    'BaseCampMaxNum': 'Max amount of bases that can be built at once.',
    'BaseCampWorkerMaxNum': 'Max amount of worker Pals that can be at a camp.',
    'DropItemAliveMaxHours': 'How long dropped items will stay spawned before disappearing.',
    'bAutoResetGuildNoOnlinePlayers': 'If true, a guild will be disbanded if no players are online.',
    'AutoResetGuildTimeNoOnlinePlayers': 'How quickly an inactive guild will be disbanded.',
    'GuildPlayerMaxNum': 'Max guild player number.',
    'PalEggDefaultHatchingTime': 'How long it takes to hatch Pal eggs.',
    'WorkSpeedRate': 'How quickly Pals work.',
    'CoopPlayerMaxNum': 'Max amount of players in a party.',
    'ServerPlayerMaxNum': 'Max players allowed on a server (caps at 32).',
    'ServerName': '"Default Palworld Server"',
    'ServerDescription': 'What is shown when selecting the server in the list.',
    'AdminPassword': 'Password used to grant admin access.',
    'ServerPassword': 'Password needed for regular players to join.'
};

const defaultValues = {
    'Difficulty': '"None"',
    'DayTimeSpeedRate': '"1.000000"',
    'NightTimeSpeedRate': '"1.000000"',
    'ExpRate': '"1.000000"',
    'PalCaptureRate': '"1.000000"',
    'PalSpawnNumRate': '"1.000000"',
    'PalDamageRateAttack': '"1.000000"',
    'PalDamageRateDefense': '"1.000000"',
    'PlayerDamageRateAttack': '"1.000000"',
    'PlayerDamageRateDefense': '"1.000000"',
    'PlayerStomachDecreaseRate': '"1.000000"',
    'PlayerStaminaDecreaseRate': '"1.000000"',
    'PlayerAutoHPRegeneRate': '"1.000000"',
    'PlayerAutoHpRegeneRateInSleep': '"1.000000"',
    'PalStomachDecreaseRate': '"1.000000"',
    'PalStaminaDecreaseRate': '"1.000000"',
    'PalAutoHPRegeneRate': '"1.000000"',
    'PalAutoHpRegeneRateInSleep': '"1.000000"',
    'BuildObjectDamageRate': '"1.000000"',
    'BuildObjectDeteriorationDamageRate': '"1.000000"',
    'CollectionDropRate': '"1.000000"',
    'CollectionObjectHpRate': '"1.000000"',
    'CollectionObjectRespawnSpeedRate': '"1.000000"',
    'EnemyDropItemRate': '"1.000000"',
    'DeathPenalty': '"All"',
    'bEnablePlayerToPlayerDamage': '"False"',
    'bEnableFriendlyFire': '"False"',
    'bEnableInvaderEnemy': '"True"',
    'bActiveUNKO': '"False"',
    'bEnableAimAssistPad': '"True"',
    'bEnableAimAssistKeyboard': '"False"',
    'DropItemMaxNum': '"3000"',
    'DropItemMaxNum_UNKO': '"100"',
    'BaseCampMaxNum': '"128"',
    'BaseCampWorkerMaxNum': '"15"',
    'DropItemAliveMaxHours': '"1.000000"',
    'bAutoResetGuildNoOnlinePlayers': '"False"',
    'AutoResetGuildTimeNoOnlinePlayers': '"72.000000"',
    'GuildPlayerMaxNum': '"20"',
    'PalEggDefaultHatchingTime': '"72.000000"',
    'WorkSpeedRate': '"1.000000"',
    'bIsMultiplay': '"False"',
    'bIsPvP': '"False"',
    'bCanPickupOtherGuildDeathPenaltyDrop': '"False"',
    'bEnableNonLoginPenalty': '"True"',
    'bEnableFastTravel': '"True"',
    'bIsStartLocationSelectByMap': '"True"',
    'bExistPlayerAfterLogout': '"False"',
    'bEnableDefenseOtherGuildPlayer': '"False"',
    'CoopPlayerMaxNum': '"4"',
    'ServerPlayerMaxNum': '"32"',
    'ServerName': '"Default Palworld Server"',
    'ServerDescription': '"Default Server Description"',
    'AdminPassword': '"CHANGEME"',
    'ServerPassword': '""', // empty string should be enclosed in double quotes
    'PublicPort': '"8211"',
    'PublicIP': '""', // empty string should be enclosed in double quotes
    'RCONEnabled': '"False"',
    'RCONPort': '"25575"',
    'Region': '""', // empty string should be enclosed in double quotes
    'bUseAuth': '"True"',
    'BanListURL': '"https://api.palworldgame.com/api/banlist.txt"'
};


const createInputFields = (category, options) => {
    const optionsContainer = document.getElementById('optionsContainer');

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'option-group';
    optionsContainer.appendChild(categoryDiv);

    const categoryHeading = document.createElement('h3');
    categoryHeading.textContent = `${category} `;
    
    // Add a class to the arrows for styling
    const arrowSpan = document.createElement('span');
    arrowSpan.className = 'arrow';
    arrowSpan.textContent = '▶';
    
    categoryHeading.appendChild(arrowSpan);

    categoryHeading.addEventListener('click', toggleCategory);
    categoryDiv.appendChild(categoryHeading);

    const categoryOptions = document.createElement('div');
    categoryOptions.className = 'category-options';
    categoryOptions.style.display = 'none'; // Set the initial display to 'none'
    categoryDiv.appendChild(categoryOptions);

    options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-container';
        categoryOptions.appendChild(optionDiv);

        const label = document.createElement('label');
        const settingName = document.createElement('span');
        settingName.textContent = option;
        settingName.style.fontWeight = 'bold';
        settingName.style.color = '#ffffff'; // Set to a light gray color
        label.appendChild(settingName);
        label.innerHTML += ': ' + (optionDescriptions[option] || '(No description)'); // Keep description non-bolded
        label.style.color = '#808080'; // Set to a grey color for the description
        optionDiv.appendChild(label);

        const input = document.createElement('input');
        input.type = 'text';
        input.name = option;
        input.value = defaultValues[option] ? defaultValues[option].replace(/"/g, '') : ''; // Remove double quotes for display
        optionDiv.appendChild(input);
    });
};



const toggleCategory = (event) => {
    const categoryOptions = event.target.nextElementSibling;
    categoryOptions.style.display = (categoryOptions.style.display === 'none' || categoryOptions.style.display === '') ? 'block' : 'none';
};

const generateINI = () => {
    const section = '/Script/Pal.PalGameWorldSettings';
    let options = '';

    optionCategories.forEach(category => {
        category.settings.forEach(option => {
            const inputElement = document.querySelector(`[name="${option}"]`);
            const value = inputElement.value;

            // Always wrap the value in double quotes
            const formattedValue = `"${value}"`;

            options += `${option}=${formattedValue},`;
        });
    });

    options = options.slice(0, -1);

    const iniResult = document.getElementById('iniResult');
    iniResult.value = `[${section}]\nOptionSettings=(${options})`;
};




// Create input fields for each option category with default values
optionCategories.forEach(category => createInputFields(category.category, category.settings));

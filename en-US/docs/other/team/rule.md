# Server Administration Regulations

## Chapter 1: General Provisions
- Article 1: These regulations aim to standardize the behavior of server administrators, protect the rights and interests of players, and maintain a harmonious and stable gaming environment.
- Article 2: Administrators should abide by these regulations, respect and protect the legitimate rights and interests of players, and perform management duties fairly and impartially.

## Chapter 2: Duties and Rights of Administrators
- Article 3: Administrators have the right to warn, mute, kick, and ban players who violate game rules.
- Article 4: Administrators are responsible for regularly patrolling the server to ensure its normal operation and address issues reported by players in a timely manner.
- Article 5: Administrators have the right to participate in the planning and construction of the server and propose suggestions for improvement.

## Chapter 3: Code of Conduct for Administrators
- Article 6: Administrators must not abuse their authority and impose unwarranted penalties on players.
- Article 7: Administrators must not disclose players' personal information.
- Article 8: Administrators must not use their positions to seek improper benefits for themselves or others.
- Article 9: Administrators must not engage in any form of advertising within the game.

## Chapter 4: Handling of Administrators Who Violate These Regulations
- Article 10: Administrators who violate these regulations will be warned, stripped of their administrative privileges, or have their accounts banned.
- Article 11: For administrators who seriously violate these regulations and cause a severe impact, permanent bans will be imposed, and legal liability may be pursued.

## Chapter 5: Supplementary Provisions
- Article 12: These regulations are enforced as of the date of their publication. Any matters not covered will be interpreted by senior management.

## Customer Service Work Responsibilities

1. **Player Support**:

    - Answer questions and resolve issues players encounter during the game through online chat, QQ, etc.
    - Provide technical support, guide players in solving game installation, login, connection, and other technical issues.
    - Record common player issues, write FAQ documents to improve service efficiency.
2. **Issue Resolution**:

    - Handle player complaints and feedback promptly, analyze the root causes, and provide effective solutions.
    - Coordinate with the technical team to ensure that technical issues are resolved quickly.
    - Track issue resolution progress to ensure players' problems are completely resolved and feedback is provided.
3. **Community Management**:

    - Maintain a harmonious atmosphere on the server, manage and supervise players' behavior both in and out of the game, and ensure compliance with server rules.
    - Handle disputes between players, mediate conflicts to ensure a fair and friendly gaming environment.
    - Regularly patrol game servers to detect and address violations.
4. **Information Collection**:

    - Collect players' suggestions and opinions, organize and feedback to the management team to optimize the gaming experience.
    - Analyze player feedback data, propose suggestions for improvement, and assist in enhancing server service quality.
    - Participate in player surveys to understand player needs and satisfaction, and develop improvement plans.

### Event Planning Work Responsibilities

1. **Event Design and Planning**

    - Design and plan various interesting and challenging game events, including but not limited to competitions, adventures, building contests, etc.
    - Ensure events are innovative and enjoyable, attracting players of all types to participate.
2. **Event Implementation and Management**

    - Develop detailed event plans and schedules to ensure events proceed as planned.
    - Organize and coordinate all aspects of events to ensure smooth execution.
    - Monitor event progress in real-time and promptly resolve issues that arise during events.
3. **Player Interaction and Feedback**

    - Actively interact with players to understand their needs and suggestions.
    - Collect event feedback, analyze event effectiveness, and continuously optimize and improve event content.
4. **Promotion and Publicity**

    - Develop event promotion plans through in-server announcements, Bilibili, and other channels.
    - Create promotional materials such as posters and videos to attract more players to participate.
5. **Data Analysis and Reporting**

    - Record and analyze event data to evaluate event effectiveness.
    - Regularly write event summary reports and propose suggestions for improvement.

## Official Website Maintenance Requirements

Must be proficient in using git and uploading to GitHub.

Must be proficient in writing with Markdown.

Please read the [Nitwikit Writing Standards](http://yizhan.wiki/NitWikit/writing) to write tutorials and other content for the official website.

## Server Plugin Writing Standards

#### 1. Coding Standards

- **Naming Conventions**:

   - Class names use PascalCase (e.g., `MyPlugin`).
   - Method names and variable names use camelCase (e.g., `getPlayerName`).
   - Constant names use ALL_CAPS_WITH_UNDERSCORES (e.g., `MAX_PLAYERS`).
- **Comments**:

   - Classes and methods must have Javadoc comments.
   - Complex logic should have inline comments.

#### 2. Logging

- Use the `getLogger()` method to record logs.
   ```java
   getLogger().info("XX plugin has been loaded");
   ```

#### 3. Plugin Dependencies

- Declare plugin dependencies in `plugin.yml`:
   ```yaml
   depend: [Dependency Plugin Name]
   ```

#### 4. Testing and Debugging

- Test thoroughly on a local server to ensure the plugin is error-free.
- Use `System.out.println` or logging for debugging.

#### 5. Publish to GitHub

Please use GitHub Desktop to publish (if you know git, you can ignore this)

***May require a tool to assist with internet access***

1. **Create a GitHub Repository**:

    - Log in to GitHub and create a new repository.
    - When initializing the repository, you can choose to add a README.md and .gitignore file (select the Java template).
2. **Clone the Repository to Local**:

    - Open GitHub Desktop.
    - Click "File" > "Clone repository".
    - Select the repository you just created and clone it to your local machine.
3. **Add Project Files to Local Repository**:

    - Copy your plugin project files into the local cloned repository directory.
4. **Commit and Push Code**:

    - In GitHub Desktop, add all changes.
    - Enter a commit message (e.g., "Initial commit").
    - Click "Commit to main".
    - Click "Push origin" to push the code to the GitHub remote repository.
5. **Release a Version**:

    - On the GitHub repository page, click the "Releases" tab.
    - Click the "Draft a new release" button.
    - Enter the version number (e.g., `v1.0.0`), title, and description.
    - Upload the plugin JAR file generated by Maven packaging.
    - Click the "Publish release" button to publish the new version.
6. **Write a README File**

```markdown
# MyPlugin

MyPlugin is a plugin for the Lanyu Minecraft server that provides some useful features.

---

## Feature Introduction

- Feature 1: Describe the function of Feature 1.
- Feature 2: Describe the function of Feature 2.
- Feature 3: Describe the function of Feature 3.

## Installation

1. Download the latest version of the plugin JAR file.
2. Place the JAR file in the `plugins` directory of the server.
3. Restart the server.

## Usage

### Commands

The plugin provides the following commands:

- `/mycommand` - Execute a specific function.
   - **Usage**: `/mycommand <parameter>`
   - **Example**: `/mycommand example`

### Permissions

The plugin uses the following permissions:

- `myplugin.use` - Allows use of basic plugin features.
   - **Default**: All players
- `myplugin.admin` - Allows use of admin features.
   - **Default**: Administrators only

### Configuration

The plugin supports the following configuration options:

```yaml
# config.yml
option1: value1
option2: value2
```

7. **API Writing Standards**

#### 1. Method Design

- **Method Signature**: Method names should clearly describe their function and avoid ambiguity.
- **Parameters**: The parameter list should be as concise as possible, using object encapsulation for multiple parameters when necessary.
- **Return Value**: The return value type should be clear, avoiding vague types (e.g., `Object`).

#### 2. Javadoc Comments

Each API method should have detailed Javadoc comments, including the following information:

- **Method Description**: A brief description of the method's function.
- **Parameters**: Use the `@param` tag to describe each parameter.
- **Return Value**: Use the `@return` tag to describe the return value.
- **Exceptions**: Use the `@throws` tag to describe possible exceptions.

Example:

```java
/**
 * Get the name of the player.
 *
 * @param playerId Player ID
 * @return Player name
 * @throws PlayerNotFoundException If the player cannot be found
 */
public String getPlayerName(String playerId) throws PlayerNotFoundException {
     // Method implementation
}
```

#### 3. Exception Handling

- **Custom Exceptions**: For specific error situations, define custom exception classes (e.g., `PlayerNotFoundException`).
- **Throwing Exceptions**: Declare possible exceptions in the method signature and throw them at appropriate places within the method.

Example:

```java
public class PlayerNotFoundException extends Exception {
     public PlayerNotFoundException(String message) {
         super(message);
     }
}
```
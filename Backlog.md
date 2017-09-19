Project Backlog (on GitHub)
===========================

The agile method for sprints/backlogs translates very easily over to the GitHub issues/milestones model.  With few changes, the entire system can work on the same platform that all of the code lives on.

## The 30-second review

At the start of the sprint when the sprint backlog is created, a milestone should be created on the main code respository with the end of the sprint as the due-date.  Aferwards, an issue for every user story should be opened under that milestone.  Labels and assignees can be added as necessary.  Branches and pull requests can be used for code review.

## Issues

Issues and user stories are essentially synonymous.  Every issue corresponds with a user story, and closing an issue should indicate that the corresponding user story has been implemented.  GitHub supports several features that make working with issues easy.

### Closing issues from commits

When authoring the commit that fufills a user story, add the phrase "Fixes #(issue number)" at some point in the commit message.  An example commit message might be as follows:

"Added support for inserting new data into the database.  Fixes #1234"

When a commit with this message is pushed to GitHub, it will automatically close the issue.  Comments can still be added, and the issue can be reopened as necessary.

### Labels

Labels can be applied to an issue individually, categorizing them in meaningful ways that extend beyond the sprint.  GitHub adds some default labels to repositories (such as "bug", "question", "invalid", and "enhancement"), but others can be used to indicate specific portions of the project (such as "database", "frontend", or "backend").

Labels should also be used to indicate the priority for a particular story/issue.  Labels such as "Low", "Medium", or "High" should be used in this case.

### Assignees

Project members can be assigned to issues.  This is a purely cosmetic feature, and it indicates who is currently working on the issue at hand.

## Milestones

Milestones are an easy way to group issues that indicate a major release and/or require some form of due date.  Other projects commonly use milestones to indicate when a project can be considered feature-complete, but they can also be used for sprints or other deadlines.  Milestones offer an easy way to see what issues still need to be completed by the time the due date rolls around.

## Code Review (branches and pull requests)

It's generally a good idea to develop new features on dedicated branches to avoid polluting the master branch with half-implementations.  Additionally, GitHub offers powerful code review techniques that are only available through the pull request system.  GitHub has an [amazing article](https://github.com/features/code-review) written solely on the topic, but a brief primer is left here.

### Branches

The workflow of creating a branch is very simple:

1. Create a new branch: `git checkout -b feature_name`
2. Hack away on the new branch
3. Push the new branch to GitHub
4. Open a pull request (detailed later)
5. Branch is merged and can now be deleted

The documentation for git branches can be found [here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

### Pull Requests

After a branch is ready to be merged, a pull request should be opened instead of directly merging the branch into the master branch.  Once the feature branch has been pushed to the repository, create a new pull request under the pull request tab.  Make sure to select the right branch!  It's often a good idea to restate which issues are being closed in a pull request (by reiterating "Fixes #1234") somewhere near the bottom of the pull request.  Pull requests are a lot like issues in that they are numbered and can be managed similarly (labels, assignees, etc).  A firm understanding of issues will make pull requests seem right at home.

### Code Review

Pull requests are very powerful for code review.  In addition to the review tools, commits can be added directly onto pull requests once changes have been implemented.  See the article linked above for more details.

## Larger user stories

If a story needs to be broken down into smaller stories, create a new issue for each new story and create a link to each new story in the issue for the old story, like so:

```markdown
- [ ] #1234
- [ ] #2345
- [ ] #3456
```

This bit of formatting, when used in an issue, produces the following output:
- [ ] #1234
- [ ] #2345
- [ ] #3456

## Projects

GitHub recently added a new feature called "Projects".   While similar to milestones in many ways, projects are more similar to a Trello board than anything else.  They don't have due dates, and milestones and issues can be grouped underneath them in diffierent categories.  They don't seem necessary to the Senior Design paradigm, so further research is required if we are to use them.
